import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getFeaturedTweets } from '../../data/featuredTweets'
import { TweetCard } from '../components/TweetCard'
import './HomePage.css'
import './ExplorePage.css'

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
    <main className="home-page explore-page">
      <div className="home-layout">
        <aside className="home-sidebar" aria-label="Accesos de invitado">
          <Link to="/explorar" className="exex-brand fs-2 text-decoration-none" aria-label="EXEX, Explorar">
            ∃ꊼ∃ꊼ
          </Link>
          <nav className="nav nav-pills flex-column mt-3" aria-label="Navegación de invitado">
            <Link to="/explorar" className="nav-link active" aria-current="page">Explorar</Link>
          </nav>
        </aside>

        <section className="home-feed" aria-labelledby="explore-heading">
          <header className="home-feed-header">
            <h1 id="explore-heading" className="h4 mb-1">Tweets destacados</h1>
            <p className="text-body-secondary mb-0">Explora EXEX como invitado.</p>
          </header>

          <div className="home-tweet-list">
            {loadFailed && <p className="mb-0" role="alert">No se pudieron cargar los destacados.</p>}
            {!loadFailed && !tweets && <p className="mb-0" role="status">Cargando destacados…</p>}
            {tweets?.length === 0 && <p className="mb-0">Aún no hay publicaciones destacadas.</p>}
            {tweets?.map(({ tweet, author }) => {
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
        </section>

        <aside className="home-discover" aria-label="Acceso a tu cuenta">
          <section className="home-panel">
            <h2 className="h5 fw-bold">Únete a EXEX</h2>
            <p className="text-body-secondary small">Inicia sesión o crea una cuenta para publicar y seguir a otras personas.</p>
            <div className="d-grid gap-2">
              <Link to="/login" className="btn btn-primary">Iniciar sesión</Link>
              <Link to="/register" className="btn btn-outline-secondary rounded-pill">Registrarse</Link>
            </div>
          </section>
        </aside>
      </div>
    </main>
  )
}
