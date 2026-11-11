import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../auth/contexts/AuthContext'
import { useFollows } from '../hooks/useFollows'
import './ExexSidebar.css'

export const ExexSidebar = () => {
  const { authState } = useContext(AuthContext)
  const { follows, currentUserId, ready } = useFollows()
  const fullname = authState.user?.fullname || authState.user?.username || 'Usuario'
  const username = authState.user?.username
  const followersCount = new Set(follows.filter((relation) => relation.followingId === currentUserId).map((relation) => relation.followerId)).size
  const followingCount = new Set(follows.filter((relation) => relation.followerId === currentUserId).map((relation) => relation.followingId)).size

  return (
    <aside className="exex-sidebar" aria-label="Perfil y accesos">
      <section className="border rounded-4 p-3" aria-labelledby="profile-heading">
        <span className="exex-sidebar-avatar rounded-circle bg-primary-subtle text-primary fw-bold px-3 py-2 mb-3" aria-hidden="true">
          {fullname.charAt(0)}
        </span>
        <h2 id="profile-heading" className="h5 text-break mb-1">{fullname}</h2>
        {username && <p className="text-body-secondary text-break mb-3">@{username}</p>}
        <div className="d-flex flex-wrap gap-3 small">
          <Link to="/followers" className="link-body-emphasis text-decoration-none">
            <strong>{ready ? followersCount : '—'}</strong> seguidores
          </Link>
          <Link to="/following" className="link-body-emphasis text-decoration-none">
            <strong>{ready ? followingCount : '—'}</strong> seguidos
          </Link>
        </div>
      </section>
      <nav className="nav nav-pills gap-1 my-3" aria-label="Accesos de EXEX">
        <NavLink to="/" end className="nav-link">Inicio</NavLink>
        {currentUserId && (
          <NavLink to={`/users/${currentUserId}`} className="nav-link">Mi perfil</NavLink>
        )}
        <NavLink to="/following" className="nav-link">Seguidos</NavLink>
        <NavLink to="/followers" className="nav-link">Seguidores</NavLink>
      </nav>
      <NavLink to="/tweets/new" className="btn btn-primary rounded-pill w-100">Publicar</NavLink>
    </aside>
  )
}
