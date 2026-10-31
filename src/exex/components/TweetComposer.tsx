import { useRef, useState } from 'react'
import type { FormEvent } from 'react'

interface TweetComposerProps {
  onPublish: (body: string) => void
}

export const TweetComposer = ({ onPublish }: TweetComposerProps) => {
  const [body, setBody] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const text = body.trim()
    if (!text) {
      setError('Escribe un mensaje antes de publicar.')
      setSuccess('')
      textAreaRef.current?.focus()
      return
    }
    onPublish(text)
    setBody('')
    setError('')
    setSuccess('Tu tweet se publicó correctamente en esta sesión de prueba.')
    textAreaRef.current?.focus()
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label className="form-label fw-semibold" htmlFor="tweet-body">¿Qué está pasando?</label>
      <textarea
        ref={textAreaRef}
        id="tweet-body"
        className={`form-control${error ? ' is-invalid' : ''}`}
        rows={5}
        value={body}
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
      <p id="tweet-help" className="form-text">Las publicaciones de prueba se reinician al recargar la página.</p>
      {error && <p id="tweet-error" className="text-danger" role="alert">{error}</p>}
      <div className="d-flex justify-content-end mt-3">
        <button type="submit" className="btn btn-primary px-4">Publicar</button>
      </div>
      <div className="mt-3" role="status" aria-live="polite" aria-atomic="true">
        {success && <p className="alert alert-success mb-0">{success}</p>}
      </div>
    </form>
  )
}
