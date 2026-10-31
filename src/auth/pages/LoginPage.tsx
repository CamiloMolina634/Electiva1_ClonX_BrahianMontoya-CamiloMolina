import { useContext, useState, type SubmitEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export const LoginPage = () => {
  const { authState, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const onLogin = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const result = await login(username.trim(), password);
      if (result) {
        navigate('/', { replace: true });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <h1 className="display-4 fw-bold text-center mb-4" aria-label="EXEX">∃ꊼ∃ꊼ</h1>
          <h2 className="h4 mb-4">Inicia sesión</h2>
          <form onSubmit={onLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Nombre de usuario</label>
              <input id="username" name="username" type="text" className="form-control"
                autoComplete="username" autoCapitalize="none" spellCheck={false}
                placeholder="Tu usuario, con o sin @" value={username} disabled={submitting}
                onChange={(event) => setUsername(event.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input id="password" name="password" type="password" className="form-control" disabled={submitting}
                autoComplete="current-password" value={password}
                onChange={(event) => setPassword(event.target.value)} required />
            </div>
            {authState.errorMessage && <p className="text-danger" role="alert">{authState.errorMessage}</p>}
            <button type="submit" className="btn btn-primary w-100" disabled={submitting}>
              {submitting ? 'Iniciando sesión…' : 'Iniciar sesión'}
            </button>
          </form>
          <p className="mt-3">¿No tienes cuenta? <Link to="/register">Regístrate</Link></p>
        </div>
      </div>
    </main>
  );
};
