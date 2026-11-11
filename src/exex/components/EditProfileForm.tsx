import { useContext, useEffect, useRef, useState, type SubmitEvent } from 'react'
import { AuthContext } from '../../auth/contexts/AuthContext'
import { PROFILE_BIO_MAX_LENGTH, PROFILE_NAME_MAX_LENGTH, PROFILE_NAME_MIN_LENGTH } from '../../auth/profile'

const ProfileImagePreview = ({ label, file }: { label: string; file: File }) => {
  const preview = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!preview.current) return
    const url = URL.createObjectURL(file)
    preview.current.src = url
    return () => URL.revokeObjectURL(url)
  }, [file])

  return (
    <div className="mb-3">
      <p className="form-text text-break mb-1">{label} · {file.name}</p>
      <img ref={preview} alt={`Vista previa de ${label.toLowerCase()}`} className="img-fluid rounded" style={{ maxHeight: '8rem' }} />
    </div>
  )
}

interface EditProfileFormProps {
  initialName: string
  initialBio: string
  photo?: File
  cover?: File
  saving: boolean
  onSavingChange: (saving: boolean) => void
  onCancel: () => void
  onSaved: () => void
}

export const EditProfileForm = ({ initialName, initialBio, photo, cover, saving, onSavingChange, onCancel, onSaved }: EditProfileFormProps) => {
  const { saveProfile } = useContext(AuthContext)
  const [fullname, setFullname] = useState(initialName)
  const [bio, setBio] = useState(initialBio)
  const [error, setError] = useState('')

  const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (saving) return
    onSavingChange(true)
    setError('')

    try {
      await saveProfile({ fullname, bio, photo, cover })
      onSaved()
    } catch (error) {
      setError(error instanceof Error ? error.message : 'No se pudo guardar el perfil.')
    } finally {
      onSavingChange(false)
    }
  }

  return (
    <form id="edit-profile" className="exex-auth-panel mt-3" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="profile-name" className="form-label">Nombre visible</label>
        <input
          id="profile-name"
          name="fullname"
          className="form-control"
          autoComplete="name"
          autoFocus
          value={fullname}
          onChange={(event) => setFullname(event.target.value)}
          minLength={PROFILE_NAME_MIN_LENGTH}
          maxLength={PROFILE_NAME_MAX_LENGTH}
          disabled={saving}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="profile-bio" className="form-label">Biografía</label>
        <textarea
          id="profile-bio"
          name="bio"
          className="form-control"
          rows={3}
          value={bio}
          onChange={(event) => setBio(event.target.value)}
          maxLength={PROFILE_BIO_MAX_LENGTH}
          aria-describedby="profile-bio-limit"
          disabled={saving}
        />
        <p id="profile-bio-limit" className="form-text mb-0">Máximo {PROFILE_BIO_MAX_LENGTH} caracteres.</p>
      </div>
      {photo && <ProfileImagePreview label="Foto de perfil" file={photo} />}
      {cover && <ProfileImagePreview label="Portada" file={cover} />}
      {error && <p className="text-danger" role="alert">{error}</p>}
      <div className="d-flex flex-wrap align-items-center gap-2">
        <button type="submit" className="btn btn-primary" disabled={saving}>
          {saving ? 'Guardando…' : 'Guardar cambios'}
        </button>
        <button type="button" className="btn btn-outline-secondary rounded-pill" onClick={onCancel} disabled={saving}>
          Cancelar
        </button>
      </div>
    </form>
  )
}
