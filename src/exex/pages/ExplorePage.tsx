import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getFeaturedTweets } from '../../data/featuredTweets'
import { TweetCard } from '../components/TweetCard'

export const ExplorePage = () => {
  const [tweets, setTweets] = useState<Awaited<ReturnType<typeof getFeaturedTweets>> | null>(null)
  const [loadFailed, setLoadFailed] = useState(false)
  const [selectedTweetId, setSelectedTweetId] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    getFeaturedTweets().then((featuredTweets) => {
      if (active) setTweets(featuredTweets)
    }).catch(() => {
      if (active) setLoadFailed(true)
    })
    return () => { active = false }
  }, [])

  return (
    <main className="container py-4 py-sm-5 exex-auth">
      <header className="mb-4">
        <Link to="/login" className="exex-brand fs-2 text-decoration-none" aria-label="EXEX, volver al inicio de sesión">
          ∃ꊼ∃ꊼ
        </Link>
        <h1 className="h3 mt-3">Tweets destacados</h1>
        <p className="text-body-secondary mb-0">Explora EXEX como invitado.</p>
      </header>

      {loadFailed && <p role="alert">No se pudieron cargar los destacados.</p>}
      {!loadFailed && !tweets && <p role="status">Cargando destacados…</p>}
      {tweets?.length === 0 && <p>Aún no hay publicaciones destacadas.</p>}
      {tweets && (
        <div className="d-grid gap-3">
          {tweets.map(({ tweet, author }) => {
            const promptId = `invite-${tweet.id}`
            const showPrompt = selectedTweetId === tweet.id
            const requestSignIn = () => setSelectedTweetId(tweet.id)

            return (
              <TweetCard key={tweet.id} tweet={tweet} author={author} onAuthorClick={requestSignIn}>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  <button type="button" className="btn btn-outline-secondary btn-sm rounded-pill"
                    onClick={requestSignIn} aria-expanded={showPrompt} aria-controls={promptId}>
                    Ver publicación
                  </button>
                  <button type="button" className="btn btn-outline-secondary btn-sm rounded-pill"
                    onClick={requestSignIn} aria-expanded={showPrompt} aria-controls={promptId}>
                    Me gusta
                  </button>
                </div>
                <div id={promptId} hidden={!showPrompt} className="exex-auth-panel mt-3">
                  <p className="mb-2" role="status">Inicia sesión o regístrate para continuar.</p>
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <Link to="/login" className="btn btn-primary">Iniciar sesión</Link>
                    <Link to="/register">Registrarse</Link>
                  </div>
                </div>
              </TweetCard>
            )
          })}
        </div>
      )}
    </main>
  )
}
