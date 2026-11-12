import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../auth/contexts/AuthContext'
import { TweetCard } from '../components/TweetCard'
import { TweetComposer } from '../components/TweetComposer'
import { useTweets } from '../hooks/useTweets'
import './PublishTweetPage.css'

export const PublishTweetPage = () => {
  const { authState } = useContext(AuthContext)
  const { tweets, loading, loadError, publishTweet } = useTweets()
  const user = authState.user

  if (!user) return null

  const latestTweet = tweets.find((tweet) => tweet.authorId === user.uid)

  return (
    <main className="container py-4 py-sm-5 publish-tweet-page">
      <Link to="/" className="btn btn-primary mb-4">← Volver al inicio</Link>
      <h1 className="h2 mb-2">Publicar un tweet</h1>
      <p className="text-body-secondary mb-4">Comparte lo que estás pensando.</p>
      <section className="card mb-4" aria-label="Nueva publicación">
        <div className="card-body p-3 p-sm-4">
          <p className="mb-4">
            <strong>{user.fullname || user.username || 'Usuario'}</strong>
            {user.username && <span className="text-body-secondary d-block">@{user.username}</span>}
          </p>
          <TweetComposer allowMedia onPublish={publishTweet} />
        </div>
      </section>
      {loading && <p role="status">Cargando tu última publicación…</p>}
      {loadError && <p className="text-danger" role="alert">{loadError}</p>}
      {latestTweet && (
        <section aria-labelledby="latest-tweet-heading">
          <h2 id="latest-tweet-heading" className="h5 mb-3">Tu última publicación</h2>
          <TweetCard showDetailLink tweet={latestTweet} author={user} />
        </section>
      )}
    </main>
  )
}
