import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/contexts/AuthContext';

export const NavBar = () => {
  const { authState, checking, logout } = useContext(AuthContext);
  const [closing, setClosing] = useState(false);
  const [error, setError] = useState('');

  const onLogout = async () => {
    if (closing) return;
    setError('');
    setClosing(true);
    try {
      await logout();
    } catch {
      setError('No se pudo cerrar la sesión. Inténtalo de nuevo.');
    } finally {
      setClosing(false);
    }
  };

  if (checking || !authState.logged) return null;

  const user = authState.user;
  const userLabel = user?.username ? `@${user.username}` : user?.fullname || user?.email || 'Usuario';

  return (
    <header className="border-bottom bg-body-tertiary">
      <nav className="navbar" aria-label="Navegación principal">
        <div className="container d-flex flex-wrap gap-3">
          <Link to="/" className="navbar-brand fw-bold me-0">EXEX</Link>
          <NavLink to="/" end className="nav-link">Inicio</NavLink>
          <div className="d-flex flex-wrap align-items-center gap-3 ms-sm-auto">
            <span className="text-break" aria-label={`Usuario conectado: ${userLabel}`}>{userLabel}</span>
            <button type="button" className="btn btn-outline-secondary" onClick={onLogout} disabled={closing}>
              {closing ? 'Cerrando sesión…' : 'Cerrar sesión'}
            </button>
          </div>
        </div>
      </nav>
      {error && <p className="container text-danger pb-3 mb-0" role="alert">{error}</p>}
    </header>
  );
};
