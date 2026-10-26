import { useContext, useState, type SubmitEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export const LoginPage = () => {
  const { authState, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const onLogin = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const result = await login(email.trim(), password);
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
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input id="email" name="email" type="email" className="form-control"
                autoComplete="username" value={email} disabled={submitting}
                onChange={(event) => setEmail(event.target.value)} required />
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
        </div>
      </div>
    </main>
  );
};
