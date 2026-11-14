import { useEffect, useRef, useState, type ReactNode } from 'react'
import { setTweetLike, watchLikes } from '../../firebase/likes'
import type { Like } from '../types/Like'
import { LikesContext } from './LikesContext'

export const LikesProvider = ({ uid, children }: { uid: string; children: ReactNode }) => {
  const [likes, setLikes] = useState<Like[] | null>(null)
  const [loadError, setLoadError] = useState('')
  const [saving, setSaving] = useState(false)
  const pending = useRef(false)
  const ready = likes !== null && !loadError

  useEffect(() => {
    if (!uid) return
    return watchLikes(setLikes, () => setLoadError('No se pudieron cargar los Me gusta. Revisa tu conexión y los permisos de Firestore.'))
  }, [uid])

  const setLiked = async (tweetId: string, shouldLike: boolean): Promise<void> => {
    if (!ready || pending.current) return
    pending.current = true
    setSaving(true)
    try {
      await setTweetLike(uid, tweetId, shouldLike)
    } finally {
      pending.current = false
      setSaving(false)
    }
  }

  return (
    <LikesContext.Provider value={{ likes: likes ?? [], currentUserId: uid, ready: Boolean(ready), saving, setLiked }}>
      {loadError && <p className="container text-danger" role="alert">{loadError}</p>}
      {children}
    </LikesContext.Provider>
  )
}
