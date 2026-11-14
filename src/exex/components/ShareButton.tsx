import { useState } from 'react'

export const ShareButton = ({ tweetId }: { tweetId: string }) => {
  const [status, setStatus] = useState<'idle' | 'copying' | 'copied' | 'error'>('idle')
  const [link, setLink] = useState('')

  const onShare = async () => {
    const url = new URL('/tweets/' + encodeURIComponent(tweetId), window.location.origin).href
    setLink(url)
    setStatus('copying')
    try {
      await navigator.clipboard.writeText(url)
      setStatus('copied')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="mt-3">
      <button type="button" className="btn btn-sm btn-outline-secondary" disabled={status === 'copying'} onClick={() => void onShare()}>
        {status === 'copying' ? 'Copiando…' : 'Compartir'}
      </button>
      {status === 'copied' && <p className="small text-success mt-2 mb-0" role="status">Enlace copiado.</p>}
      {status === 'error' && (
        <div className="mt-2">
          <p className="small text-danger mb-1" role="alert">No se pudo copiar el enlace. Puedes copiarlo de este campo.</p>
          <input className="form-control form-control-sm" aria-label="Enlace de la publicación" value={link} readOnly onFocus={(event) => event.currentTarget.select()} />
        </div>
      )}
    </div>
  )
}
