import { useEffect, useRef, useState, type FormEvent } from 'react'
import { MAX_TWEET_LENGTH } from '../../firebase/tweets'

import { TWEET_MEDIA_TYPES, validateTweetMedia } from '../../firebase/tweetMedia'

interface TweetComposerProps {
  onPublish: (body: string, attachment?: File) => Promise<void>
  allowMedia?: boolean
  label?: string
  submitLabel?: string
  successMessage?: string
}

export const TweetComposer = ({
  onPublish,
  allowMedia = false,
  label = '¿Qué está pasando?',
  submitLabel = 'Publicar',
  successMessage = 'Tu tweet se guardó correctamente.',
}: TweetComposerProps) => {
  const [body, setBody] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [saving, setSaving] = useState(false)
  const [attachment, setAttachment] = useState<File>()
  const [previewUrl, setPreviewUrl] = useState('')
  const [attachmentError, setAttachmentError] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!previewUrl) return
    return () => URL.revokeObjectURL(previewUrl)
  }, [previewUrl])

  const clearAttachment = () => {
    setAttachment(undefined)
    setPreviewUrl('')
    setAttachmentError('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }
  const pending = useRef(false)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (pending.current || attachmentError) return

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
      await onPublish(text, attachment)
      setBody('')
      clearAttachment()
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
      {allowMedia && (
        <div className="mt-3">
          <label htmlFor="tweet-attachment" className="form-label">Imagen o GIF (opcional)</label>
          <input
            ref={fileInputRef}
            id="tweet-attachment"
            className="form-control"
            type="file"
            accept={TWEET_MEDIA_TYPES.join(',')}
            disabled={saving}
            aria-describedby="tweet-attachment-help"
            aria-invalid={Boolean(attachmentError)}
            onChange={(event) => {
              const file = event.target.files?.[0]
              setAttachment(undefined)
              setPreviewUrl('')
              setAttachmentError('')
              if (!file) return
              const validationError = validateTweetMedia(file)
              if (validationError) {
                event.target.value = ''
                setAttachmentError(validationError)
                return
              }
              setAttachment(file)
              setPreviewUrl(URL.createObjectURL(file))
              setSuccess('')
            }}
          />
          <p id="tweet-attachment-help" className="form-text">JPG, PNG, WebP o GIF. Máximo 5 MB.</p>
          {attachmentError && <p className="text-danger" role="alert">{attachmentError}</p>}
          {(attachment || attachmentError) && (
            <div>
              {previewUrl && <img src={previewUrl} className="img-fluid rounded d-block mb-2" alt="Vista previa del adjunto" />}
              <button type="button" className="btn btn-outline-secondary btn-sm" disabled={saving} onClick={clearAttachment}>
                Quitar adjunto
              </button>
            </div>
          )}
        </div>
      )}
      <div className="d-flex justify-content-end mt-3">
        <button type="submit" className="btn btn-primary px-4" disabled={saving || Boolean(attachmentError)}>
          {saving ? 'Guardando…' : submitLabel}
        </button>
      </div>
      <div className="mt-3" role="status" aria-live="polite" aria-atomic="true">
        {success && <p className="alert alert-success mb-0">{success}</p>}
      </div>
    </form>
  )
}
