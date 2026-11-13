import { useContext } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AuthContext } from '../../auth/contexts/AuthContext'
import { useFollows } from '../hooks/useFollows'
import { Feed } from '../components/Feed'
import { UserSearch } from '../components/UserSearch'
import './HomePage.css'

export const HomePage = () => {
  const { authState } = useContext(AuthContext)
  const { users, currentUserId } = useFollows()
  const [searchParams] = useSearchParams()
  const feedMode = searchParams.get('feed') === 'following' ? 'following' : 'all'
  const fullname = authState.user?.fullname || authState.user?.username || 'Usuario'

  return (
    <main className="home-page">
      <div className="home-layout">
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

        <aside className="home-discover" aria-label="Descubre la comunidad">
          <UserSearch />
          <section className="home-panel">
            <span className="home-eyebrow">TU COMUNIDAD</span>
            <h2 className="h5 fw-bold mt-2">Conecta en EXEX</h2>
            <p className="text-body-secondary small">Ideas, proyectos y conversaciones de personas como tú.</p>
            <Link to="/following" className="home-text-link">Ver personas que sigues →</Link>
          </section>
          <section className="home-panel" aria-labelledby="community-heading">
            <h2 id="community-heading" className="h5 fw-bold mb-1">Personas en EXEX</h2>
            <p className="small text-body-secondary mb-3">Cuentas registradas en EXEX</p>
            {users.filter((user) => user.uid !== currentUserId).slice(0, 5).map((user, index) => (
              <div key={user.uid} className="home-person">
                <span className={`home-avatar home-avatar-${index % 4}`} aria-hidden="true">{user.fullname.charAt(0)}</span>
                <div className="home-person-info">
                  <Link to={`/users/${user.uid}`}>{user.fullname}</Link>
                  <span>@{user.username}</span>
                </div>
              </div>
            ))}
          </section>
          <p className="home-footnote">EXEX · Proyecto de Electiva<br />2026</p>
        </aside>
      </div>
    </main>
  )
}
