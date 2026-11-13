import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AuthContext } from '../../auth/contexts/AuthContext'
import { createReply, watchReplies } from '../../firebase/replies'
import { TweetCard } from '../components/TweetCard'
import { TweetComposer } from '../components/TweetComposer'
import { useFollows } from '../hooks/useFollows'
import { useTweets } from '../hooks/useTweets'
import type { Tweet } from '../types/social'

const TweetReplies = ({ tweetId }: { tweetId: string }) => {
  const { users, currentUserId } = useFollows()
  const { authState } = useContext(AuthContext)
  const [replies, setReplies] = useState<Tweet[] | null>(null)
  const [error, setError] = useState('')

  useEffect(() => watchReplies(tweetId, setReplies, () => {
    setError('No se pudieron cargar las respuestas.')
  }), [tweetId])

  return (
    <section className="mt-4" aria-labelledby="replies-heading">
      <h2 id="replies-heading" className="h4">Respuestas</h2>
      <TweetComposer
        onPublish={(body) => createReply(tweetId, currentUserId, body)}
        label="Escribe una respuesta"
        submitLabel="Responder"
        successMessage="Tu respuesta se guardó correctamente."
      />
      <div className="d-grid gap-3 mt-4">
        {error ? (
          <p className="alert alert-danger" role="alert">{error}</p>
        ) : replies === null ? (
          <p role="status">Cargando respuestas…</p>
        ) : replies.length === 0 ? (
          <p>Todavía no hay respuestas.</p>
        ) : replies.map((reply) => {
          const author = authState.user?.uid === reply.authorId
            ? authState.user
            : users.find((user) => user.uid === reply.authorId)

          return (
            <TweetCard
              key={reply.id}
              tweet={reply}
              author={author ?? { uid: reply.authorId, fullname: 'Usuario de EXEX', username: '' }}
            />
          )
        })}
      </div>
    </section>
  )
}

export const TweetDetailPage = () => {
  const { tweetId } = useParams()
  const { tweets, loading, loadError } = useTweets()
  const { users } = useFollows()
  const { authState } = useContext(AuthContext)
  const tweet = tweets.find((item) => item.id === tweetId)
  const author = authState.user?.uid === tweet?.authorId
    ? authState.user
    : users.find((user) => user.uid === tweet?.authorId)

  return (
    <main className="container pt-0 pb-4">
      <div className="page-heading">
        <Link to="/" className="profile-back link-body-emphasis" aria-label="Volver al inicio" title="Volver al inicio">←</Link>
        <h1 className="h2 mb-0">Publicación</h1>
      </div>
      {loadError ? (
        <p className="alert alert-danger" role="alert">{loadError}</p>
      ) : loading ? (
        <p role="status">Cargando publicación…</p>
      ) : tweet ? (
        <>
          <TweetCard
            canRepost
            tweet={tweet}
            author={author ?? { uid: tweet.authorId, fullname: 'Usuario de EXEX', username: '' }}
          />
          <TweetReplies key={tweet.id} tweetId={tweet.id} />
        </>
      ) : (
        <p className="alert alert-info">No se encontró esta publicación.</p>
      )}
    </main>
  )
}
