import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
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
    <header className="exex-header border-bottom">
      <nav className="navbar" aria-label="Navegación principal">
        <div className="container exex-header-content d-flex flex-wrap gap-3">
          <Link to="/" className="navbar-brand exex-brand me-0" aria-label="EXEX, inicio">∃ꊼ∃ꊼ</Link>
          <div className="exex-account d-flex align-items-center gap-3 ms-sm-auto">
            <span className="exex-account-avatar" aria-hidden="true">{(user?.fullname || userLabel).charAt(0).toUpperCase()}</span>
            <div className="exex-account-info">
              <span className="exex-account-caption">Tu cuenta</span>
              <span className="exex-account-name" title={userLabel} aria-label={`Usuario conectado: ${userLabel}`}>{userLabel}</span>
            </div>
            <button type="button" className="btn btn-primary rounded-pill" onClick={onLogout} disabled={closing}>
              {closing ? 'Cerrando sesión…' : 'Cerrar sesión'}
            </button>
          </div>
        </div>
      </nav>
      {error && <p className="container text-danger pb-3 mb-0" role="alert">{error}</p>}
    </header>
  );
};
