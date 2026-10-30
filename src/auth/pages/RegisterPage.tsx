import { useContext, useState, type SubmitEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export const RegisterPage = () => {
  const { authState, register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const onRegister = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    setError('');
    if (fullname.trim().length < 2) {
      setError('Escribe tu nombre completo.');
      return;
    }
    setSubmitting(true);
    try {
      if (await register({ fullname, username, email, password })) {
        navigate('/', { replace: true });
      }
    } catch {
      setError('No se pudo completar el registro. Inténtalo de nuevo.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="container py-5 exex-auth">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h1 className="display-4 exex-brand text-center mb-4" aria-label="EXEX">∃ꊼ∃ꊼ</h1>
          <h2 className="h4 mb-4">Crea tu cuenta</h2>
          <form onSubmit={onRegister} aria-busy={submitting} className="exex-auth-panel">
            <fieldset disabled={submitting}>
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Nombre completo</label>
                <input id="fullname" name="fullname" className="form-control" autoComplete="name"
                  minLength={2} maxLength={80} value={fullname} onChange={(event) => setFullname(event.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Nombre de usuario</label>
                <input id="username" name="username" className="form-control" autoComplete="username"
                  pattern="[a-zA-Z0-9_]{3,20}" minLength={3} maxLength={20} aria-describedby="username-help"
                  value={username} onChange={(event) => setUsername(event.target.value)} required />
                <div id="username-help" className="form-text">Entre 3 y 20 letras sin tildes, números o guion bajo. Sin @. Se guarda en minúsculas.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="register-email" className="form-label">Correo electrónico</label>
                <input id="register-email" name="email" type="email" className="form-control" autoComplete="email"
                  value={email} onChange={(event) => setEmail(event.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="register-password" className="form-label">Contraseña</label>
                <input id="register-password" name="password" type="password" className="form-control"
                  autoComplete="new-password" minLength={6} aria-describedby="password-help"
                  value={password} onChange={(event) => setPassword(event.target.value)} required />
                <div id="password-help" className="form-text">Mínimo 6 caracteres.</div>
              </div>
              {(error || authState.errorMessage) && <p className="text-danger" role="alert">{error || authState.errorMessage}</p>}
              <button type="submit" className="btn btn-primary w-100">{submitting ? 'Creando cuenta…' : 'Registrarse'}</button>
            </fieldset>
          </form>
          <p className="mt-3 exex-auth-footer">¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></p>
        </div>
      </div>
    </main>
  );
};
