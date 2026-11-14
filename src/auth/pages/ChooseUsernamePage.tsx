import { useContext, useState, type SubmitEvent } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export const ChooseUsernamePage = () => {
  const { chooseGoogleUsername, logout } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (saving) return
    setSaving(true)
    setError('')
    try {
      await chooseGoogleUsername(username)
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'No se pudo guardar el usuario. Inténtalo de nuevo.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <main className="container py-5 exex-auth">
      <div className="row justify-content-center"><div className="col-12 col-md-8 col-lg-6">
        <h1 className="h4 mb-3">Elige tu usuario</h1>
        <p>Así te encontrarán en EXEX.</p>
        <form className="exex-auth-panel" onSubmit={onSubmit}>
          <label htmlFor="google-username" className="form-label">Nombre de usuario</label>
          <input id="google-username" className="form-control" value={username}
            onChange={(event) => setUsername(event.target.value)} placeholder="@usuario"
            autoComplete="username" autoCapitalize="none" spellCheck={false}
            required maxLength={21} disabled={saving} aria-describedby="username-help" />
          <p id="username-help" className="small text-body-secondary mt-2">Entre 3 y 20 letras, números o guiones bajos.</p>
          {error && <p role="alert" className="text-danger">{error}</p>}
          <button className="btn btn-primary w-100" disabled={saving}>{saving ? 'Guardando…' : 'Continuar'}</button>
          <button type="button" className="btn btn-link mt-2" disabled={saving} onClick={() => void logout()}>Cerrar sesión</button>
        </form>
      </div></div>
    </main>
  )
}
