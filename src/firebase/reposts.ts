import { collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc, Timestamp } from 'firebase/firestore'
import { FirebaseDB } from './config'

export interface Repost {
  id: string
  userId: string
  tweetId: string
  createdAt: string
}

const repostsCollection = collection(FirebaseDB, 'reposts')

export const watchReposts = (
  onReposts: (reposts: Repost[]) => void,
  onError: () => void,
) => onSnapshot(query(repostsCollection, orderBy('createdAt', 'desc')), (snapshot) => {
  onReposts(snapshot.docs.flatMap((repost) => {
    const { userId, tweetId, createdAt } = repost.data()
    if (typeof userId !== 'string' || typeof tweetId !== 'string' || !(createdAt instanceof Timestamp)) {
      return []
    }
    return [{ id: repost.id, userId, tweetId, createdAt: createdAt.toDate().toISOString() }]
  }))
}, onError)

export const setRepost = async (userId: string, tweetId: string, shouldRepost: boolean): Promise<void> => {
  if (!userId) throw new Error('Inicia sesión para republicar.')

  const repost = doc(repostsCollection, userId + ':' + tweetId)
  if (shouldRepost) {
    await setDoc(repost, { userId, tweetId, createdAt: serverTimestamp() })
  } else {
    await deleteDoc(repost)
  }
}
