import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../auth/contexts/AuthContext'
import { mockHomeProfile } from '../../data/home'
import { mockUsers } from '../../data/users'
import './HomePage.css'

export const HomePage = () => {
  const { fullname, username, followersCount, followingCount } = mockHomeProfile
  const { logout } = useContext(AuthContext)
  const [closing, setClosing] = useState(false)
  const [error, setError] = useState('')

  const onLogout = async () => {
    if (closing) return
    setClosing(true)
    setError('')
    try {
      await logout()
    } catch {
      setError('No se pudo cerrar la sesión. Inténtalo de nuevo.')
    } finally {
      setClosing(false)
    }
  }

  return (
    <main className="home-page">
      <div className="home-layout">
        <aside className="home-sidebar" aria-label="Perfil y accesos">
          <p className="home-brand">EXEX</p>
          <section className="border rounded-4 p-3" aria-labelledby="profile-heading">
            <span className="d-inline-flex rounded-circle bg-primary-subtle text-primary fw-bold px-3 py-2 mb-3" aria-hidden="true">
              {fullname.charAt(0)}
            </span>
            <h2 id="profile-heading" className="h5 text-break mb-1">{fullname}</h2>
            <p className="text-body-secondary text-break mb-3">@{username}</p>
            <div className="d-flex flex-wrap gap-3 small">
              <Link to="/followers" className="link-body-emphasis text-decoration-none">
                <strong>{followersCount}</strong> seguidores
              </Link>
              <Link to="/following" className="link-body-emphasis text-decoration-none">
                <strong>{followingCount}</strong> seguidos
              </Link>
            </div>
          </section>
          <nav className="nav nav-pills flex-column gap-1 my-3" aria-label="Accesos de inicio">
            <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
            <Link to="/following" className="nav-link link-body-emphasis">Seguidos</Link>
            <Link to="/followers" className="nav-link link-body-emphasis">Seguidores</Link>
          </nav>
          <Link to="/tweets/new" className="btn btn-primary rounded-pill w-100">Publicar</Link>
          <button type="button" className="btn btn-outline-secondary rounded-pill w-100 mt-3" onClick={onLogout} disabled={closing}>
            {closing ? 'Cerrando sesión…' : 'Cerrar sesión'}
          </button>
          {error && <p className="text-danger mt-3" role="alert">{error}</p>}
        </aside>

        <div className="home-feed">
          <div className="home-feed-content">
            <div className="home-feed-header">
              <h1 className="h4 mb-0">Inicio</h1>
            </div>
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
            <section className="p-4 text-center" aria-labelledby="feed-heading">
              <h2 id="feed-heading" className="h5">Publicaciones recientes</h2>
              <p className="text-body-secondary mb-0">Aquí aparecerán tus publicaciones y las de las personas que sigues.</p>
            </section>
          </div>
        </div>

        <aside className="home-discover" aria-label="Descubre la comunidad">
          <section className="home-panel">
            <span className="home-eyebrow">TU COMUNIDAD</span>
            <h2 className="h5 fw-bold mt-2">Conecta en EXEX</h2>
            <p className="text-body-secondary small">Ideas, proyectos y conversaciones de personas como tú.</p>
            <Link to="/following" className="home-text-link">Ver personas que sigues →</Link>
          </section>
          <section className="home-panel" aria-labelledby="community-heading">
            <h2 id="community-heading" className="h5 fw-bold mb-1">Personas en EXEX</h2>
            <p className="small text-body-secondary mb-3">Perfiles de ejemplo de la comunidad</p>
            {mockUsers.filter((user) => user.username !== username).slice(0, 5).map((user, index) => (
              <div key={user.uid} className="home-person">
                <span className={`home-avatar home-avatar-${index % 4}`} aria-hidden="true">{user.fullname.charAt(0)}</span>
                <div className="home-person-info">
                  <strong>{user.fullname}</strong>
                  <span>@{user.username}</span>
                </div>
              </div>
            ))}
          </section>
          <p className="home-footnote">EXEX · Proyecto de Electiva<br />Comunidad de prueba · 2026</p>
        </aside>
      </div>
    </main>
  )
}
