import { useRef, useState, type FormEvent } from 'react'
import { MAX_TWEET_LENGTH } from '../../firebase/tweets'

interface TweetComposerProps {
  onPublish: (body: string) => Promise<void>
  label?: string
  submitLabel?: string
  successMessage?: string
}

export const TweetComposer = ({
  onPublish,
  label = '¿Qué está pasando?',
  submitLabel = 'Publicar',
  successMessage = 'Tu tweet se guardó correctamente.',
}: TweetComposerProps) => {
  const [body, setBody] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [saving, setSaving] = useState(false)
  const pending = useRef(false)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (pending.current) return

    const text = body.trim()
    setError('')
    setSuccess('')
    if (!text || text.length > MAX_TWEET_LENGTH) {
      setError(!text
        ? 'Escribe un mensaje antes de publicar.'
        : 'El mensaje no puede superar los 280 caracteres.')
      textAreaRef.current?.focus()
      return
    }

    pending.current = true
    setSaving(true)
    try {
      await onPublish(text)
      setBody('')
      setSuccess(successMessage)
    } catch {
      setError('No se pudo guardar el mensaje. Inténtalo de nuevo.')
    } finally {
      pending.current = false
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-busy={saving}>
      <label className="form-label fw-semibold" htmlFor="tweet-body">{label}</label>
      <textarea
        ref={textAreaRef}
        id="tweet-body"
        className={`form-control${error ? ' is-invalid' : ''}`}
        rows={5}
        value={body}
        readOnly={saving}
        maxLength={MAX_TWEET_LENGTH}
        placeholder="Comparte una idea con EXEX…"
        aria-required="true"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? 'tweet-help tweet-error' : 'tweet-help'}
        onChange={(event) => {
          setBody(event.target.value)
          setError('')
          setSuccess('')
        }}
      />
      <p id="tweet-help" className="form-text">{body.length}/{MAX_TWEET_LENGTH} caracteres</p>
      {error && <p id="tweet-error" className="text-danger" role="alert">{error}</p>}
      <div className="d-flex justify-content-end mt-3">
        <button type="submit" className="btn btn-primary px-4" disabled={saving}>
          {saving ? 'Guardando…' : submitLabel}
        </button>
      </div>
      <div className="mt-3" role="status" aria-live="polite" aria-atomic="true">
        {success && <p className="alert alert-success mb-0">{success}</p>}
      </div>
    </form>
  )
}
