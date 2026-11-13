import { useContext } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AuthContext } from '../../auth/contexts/AuthContext'
import { Feed } from '../components/Feed'
import './HomePage.css'

export const HomePage = () => {
  const { authState } = useContext(AuthContext)
  const [searchParams] = useSearchParams()
  const feedMode = searchParams.get('feed') === 'following' ? 'following' : 'all'
  const fullname = authState.user?.fullname || authState.user?.username || 'Usuario'

  return (
    <main className="home-page">
      <div className="home-feed">
        <div className="home-feed-content">
          {authState.errorMessage && <p className="text-danger p-3" role="alert">{authState.errorMessage}</p>}
          <h1 className="visually-hidden">Inicio</h1>
          <section className="p-3 border-bottom" aria-label="Nueva publicación">
            <div className="d-flex align-items-center gap-3 mb-3">
              <span className="rounded-circle bg-primary-subtle text-primary fw-bold px-3 py-2" aria-hidden="true">
                {fullname.charAt(0)}
              </span>
              <Link to="/tweets/new" className="text-body-secondary text-decoration-none fs-5">¿Qué está pasando?</Link>
            </div>
            <div className="d-flex justify-content-end">
              <Link to="/tweets/new" className="btn btn-primary rounded-pill px-4">Publicar</Link>
            </div>
          </section>
          <Feed key={feedMode} mode={feedMode} />
        </div>
      </div>
    </main>
  )
}
