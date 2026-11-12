import { useEffect, useRef, useState, type ReactNode } from 'react'
import { collection, doc, onSnapshot, runTransaction } from 'firebase/firestore'
import { FirebaseDB } from '../../firebase/config'
import { FollowsContext, type SocialProfile } from './FollowsContext'
import type { Follow } from '../types/Follow'

export const FollowsProvider = ({ uid, children }: { uid: string; children: ReactNode }) => {
  const [users, setUsers] = useState<SocialProfile[] | null>(null)
  const [follows, setFollows] = useState<Follow[] | null>(null)
  const [loadError, setLoadError] = useState('')
  const [message, setMessage] = useState('')
  const [saving, setSaving] = useState(false)
  const pending = useRef(false)
  const ready = users !== null && follows !== null && !loadError

  useEffect(() => {
    if (!uid) return
    const fail = () => setLoadError('No se pudieron cargar los seguimientos. Revisa la conexión y los permisos de Firestore.')
    const stopUsers = onSnapshot(collection(FirebaseDB, 'users'), (snapshot) => {
      setUsers(snapshot.docs.flatMap((profile) => {
        const { fullname, username, photoURL, bio, coverURL } = profile.data()
        if (typeof fullname !== 'string' || typeof username !== 'string') return []
        return [{
          uid: profile.id,
          fullname,
          username,
          photoURL: typeof photoURL === 'string' ? photoURL : null,
          bio: typeof bio === 'string' ? bio : undefined,
          coverURL: typeof coverURL === 'string' ? coverURL : undefined,
        }]
      }))
    }, fail)
    const stopFollows = onSnapshot(collection(FirebaseDB, 'follows'), (snapshot) => {
      setFollows(snapshot.docs.flatMap((relation) => {
        const { followerId, followingId } = relation.data()
        if (typeof followerId !== 'string' || typeof followingId !== 'string') return []
        return [{ followerId, followingId }]
      }))
    }, fail)
    return () => {
      stopUsers()
      stopFollows()
    }
  }, [uid])

  const setFollowing = async (targetId: string, shouldFollow: boolean) => {
    if (!ready || pending.current || uid === targetId) return
    const target = users.find((user) => user.uid === targetId)
    if (!target) return

    pending.current = true
    setSaving(true)
    setMessage('')
    try {
      const ref = doc(FirebaseDB, 'follows', uid + ':' + targetId)
      const changed = await runTransaction(FirebaseDB, async (transaction) => {
        const exists = (await transaction.get(ref)).exists()
        if (exists === shouldFollow) return false

        if (shouldFollow) {
          transaction.set(ref, { followerId: uid, followingId: targetId })
        } else {
          transaction.delete(ref)
        }
        return true
      })
      if (shouldFollow && !changed) {
        setMessage('Ya sigues a @' + target.username + '.')
      }
    } catch {
      setMessage(shouldFollow
        ? 'No se pudo seguir a este usuario. Inténtalo de nuevo.'
        : 'No se pudo dejar de seguir a este usuario. Inténtalo de nuevo.')
    } finally {
      pending.current = false
      setSaving(false)
    }
  }

  return (
    <FollowsContext.Provider value={{ users: users ?? [], follows: follows ?? [], currentUserId: uid, ready: Boolean(ready), saving, setFollowing }}>
      {loadError && <p className="container text-danger" role="alert">{loadError}</p>}
      {uid && !ready && !loadError && <p className="container" role="status">Cargando seguimientos…</p>}
      {message && <p className="container" role="status">{message}</p>}
      {children}
    </FollowsContext.Provider>
  )
}

