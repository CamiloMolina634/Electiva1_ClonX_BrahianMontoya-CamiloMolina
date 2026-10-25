import { useContext, useState } from 'react';
import { AuthContext } from '../../auth/contexts/AuthContext';

export const HomePage = () => {
  const { authState, logout } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [closing, setClosing] = useState(false);

  const onLogout = async () => {
    setError('');
    setClosing(true);
    try {
      await logout();
    } catch {
      setError('No se pudo cerrar la sesión. Inténtalo de nuevo.');
      setClosing(false);
    }
  };

  return (
  <main className="project-start">
    <h1 className="project-mark" aria-label="EXEX">∃ꊼ∃ꊼ</h1>
    <p>Electiva I · Primera entrega</p>
    <p>La base de EXEX está lista para crear las primeras pantallas.</p>
    <p>Sesión de {authState.user?.email}</p>
    <button type="button" className="btn btn-outline-secondary" onClick={onLogout} disabled={closing}>
      {closing ? 'Cerrando sesión…' : 'Cerrar sesión'}
    </button>
    {error && <p className="text-danger" role="alert">{error}</p>}
  </main>
  );
};

