import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFollows } from '../hooks/useFollows'

export const UserSearch = () => {
  const [query, setQuery] = useState('')
  const { users, currentUserId, ready } = useFollows()
  const username = query.trim().replace(/^@/, '').toLowerCase()
  const matches = ready && username
    ? users.filter((user) => user.uid !== currentUserId && user.username.toLowerCase().startsWith(username))
    : []
  const exactMatch = matches.find((user) => user.username.toLowerCase() === username)
  const results = (exactMatch ? [exactMatch, ...matches.filter((user) => user !== exactMatch)] : matches).slice(0, 6)

  return (
    <section className="home-user-search" role="search" aria-label="Buscar personas">
      <label htmlFor="search-username" className="visually-hidden">Buscar por nombre de usuario</label>
      <div className="home-search-field">
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 4 4" />
        </svg>
        <input id="search-username" type="search" className="form-control rounded-pill"
          placeholder="Buscar" autoComplete="off" autoCapitalize="none" spellCheck={false}
          value={query} onChange={(event) => setQuery(event.target.value)} />
      </div>
      {username && (
        <div className="home-panel mt-2 mb-0 p-2">
          {!ready ? (
            <p className="small text-body-secondary m-2" role="status">La búsqueda no está disponible todavía.</p>
          ) : results.length ? (
            <ul className="list-unstyled mb-0" aria-label="Resultados de búsqueda">
              {results.map((user) => (
                <li key={user.uid}>
                  <Link className="home-search-result d-block rounded-3 p-2 text-decoration-none" to={`/users/${user.uid}`}>
                    <strong className="d-block text-break">{user.fullname}</strong>
                    <span className="small text-body-secondary text-break">@{user.username}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="small text-body-secondary m-2" role="status">No encontramos usuarios con ese nombre.</p>
          )}
        </div>
      )}
    </section>
  )
}
