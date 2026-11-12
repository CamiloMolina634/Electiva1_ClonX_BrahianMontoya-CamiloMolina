import { useState } from 'react'
import { useTweets } from '../hooks/useTweets'

export const RepostButton = ({ tweetId }: { tweetId: string }) => {
  const { reposts, userId, repostsReady, changeRepost } = useTweets()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const reposted = reposts.some((item) => item.userId === userId && item.tweetId === tweetId)

  const handleClick = async () => {
    if (saving || !repostsReady) return
    setSaving(true)
    setError('')
    try {
      await changeRepost(tweetId, !reposted)
    } catch {
      setError('No se pudo actualizar la republicación.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="mt-3">
      <button
        type="button"
        className="btn btn-sm btn-outline-secondary"
        aria-pressed={reposted}
        disabled={!repostsReady || saving}
        onClick={() => void handleClick()}
      >
        {saving ? 'Guardando…' : reposted ? 'Deshacer republicación' : 'Republicar'}
      </button>
      {error && <p className="text-danger mb-0 mt-2" role="alert">{error}</p>}
    </div>
  )
}
