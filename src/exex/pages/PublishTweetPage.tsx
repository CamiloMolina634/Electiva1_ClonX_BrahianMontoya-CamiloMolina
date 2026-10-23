import { Link } from 'react-router-dom'
import { TweetComposer } from '../components/TweetComposer'
import { useTweets } from '../hooks/useTweets'
import './PublishTweetPage.css'

const dateFormatter = new Intl.DateTimeFormat('es-CO', {
  dateStyle: 'medium',
  timeStyle: 'short',
})

export const PublishTweetPage = () => {
  const { currentUser, tweets, publishTweet } = useTweets()
  const latestTweet = tweets.find((tweet) => tweet.authorId === currentUser.id)

  return (
    <main className="container py-4 py-sm-5 publish-tweet-page">
      <Link to="/" className="d-inline-block mb-4">← Volver al inicio</Link>
      <h1 className="h2 mb-2">Publicar un tweet</h1>
      <p className="text-body-secondary mb-4">Comparte lo que estás pensando.</p>
      <section className="card mb-4" aria-label="Nueva publicación">
        <div className="card-body p-3 p-sm-4">
          <p className="mb-4">
            <strong>{currentUser.fullName}</strong>
            <span className="text-body-secondary d-block">@{currentUser.username} · Usuario de prueba</span>
          </p>
          <TweetComposer onPublish={publishTweet} />
        </div>
      </section>
      {latestTweet && (
        <section aria-labelledby="latest-tweet-heading">
          <h2 id="latest-tweet-heading" className="h5 mb-3">Tu última publicación</h2>
          <article className="card">
            <div className="card-body p-3 p-sm-4">
              <p className="mb-1 fw-semibold">{currentUser.fullName}</p>
              <p className="text-body-secondary small">
                @{currentUser.username} · <time dateTime={latestTweet.createdAt}>{dateFormatter.format(new Date(latestTweet.createdAt))}</time>
              </p>
              <p className="tweet-message mb-0">{latestTweet.body}</p>
            </div>
          </article>
        </section>
      )}
    </main>
  )
}
