import { useContext } from 'react';
import { AuthContext } from '../../auth/contexts/AuthContext';

export const HomePage = () => {
  const { authState } = useContext(AuthContext);

  return (
  <main className="project-start">
    <h1 className="project-mark" aria-label="EXEX">∃ꊼ∃ꊼ</h1>
    <p>Electiva I · Primera entrega</p>
    <p>La base de EXEX está lista para crear las primeras pantallas.</p>
    <p>Sesión de {authState.user?.email}</p>
  </main>
  );
};

