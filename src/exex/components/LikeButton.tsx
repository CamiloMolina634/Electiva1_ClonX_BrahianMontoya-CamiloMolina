import { useState } from 'react'
import { useLikes } from '../hooks/useLikes'

export const LikeButton = ({ tweetId }: { tweetId: string }) => {
  const { likes, currentUserId, ready, saving, setLiked } = useLikes()
  const [error, setError] = useState('')
  const likedBy = new Set(likes.filter((like) => like.tweetId === tweetId).map((like) => like.userId))
  const isLiked = likedBy.has(currentUserId)

  const onLike = async () => {
    setError('')
    try {
      await setLiked(tweetId, !isLiked)
    } catch {
      setError('No se pudo actualizar el Me gusta. Inténtalo de nuevo.')
    }
  }

  return (
    <div className="mt-3">
      <button
        type="button"
        className={`btn btn-sm rounded-pill ${isLiked ? 'btn-outline-danger' : 'btn-outline-secondary'}`}
        aria-label={isLiked ? 'Quitar Me gusta' : 'Dar Me gusta'}
        aria-pressed={isLiked}
        disabled={!ready || saving}
        onClick={() => void onLike()}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
        </svg>
        <span className="ms-2">Me gusta · {ready ? likedBy.size : '…'}</span>
      </button>
      {error && <p className="small text-danger mt-2 mb-0" role="alert">{error}</p>}
    </div>
  )
}
