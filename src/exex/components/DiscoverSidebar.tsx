import { Link } from 'react-router-dom'
import { useFollows } from '../hooks/useFollows'
import { UserSearch } from './UserSearch'
import '../pages/HomePage.css'

export const DiscoverSidebar = () => {
  const { users, currentUserId } = useFollows()

  return (
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
  )
}
