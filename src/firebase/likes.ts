import { collection, doc, onSnapshot, runTransaction } from 'firebase/firestore'
import { FirebaseAuth, FirebaseDB } from './config'
import type { Like } from '../exex/types/Like'

export const watchLikes = (onLikes: (likes: Like[]) => void, onError: () => void) =>
  onSnapshot(collection(FirebaseDB, 'likes'), (snapshot) => {
    onLikes(snapshot.docs.flatMap((document) => {
      const { tweetId, userId } = document.data()
      return typeof tweetId === 'string' && typeof userId === 'string'
        ? [{ tweetId, userId }]
        : []
    }))
  }, onError)

export const setTweetLike = async (uid: string, tweetId: string, shouldLike: boolean): Promise<void> => {
  if (!uid || FirebaseAuth.currentUser?.uid !== uid || !tweetId || tweetId.includes('/')) {
    throw new Error('No se pudo identificar la cuenta o la publicación.')
  }
  const likeId = encodeURIComponent(tweetId) + ':' + encodeURIComponent(uid)
  const likeRef = doc(FirebaseDB, 'likes', likeId)
  const tweetRef = doc(FirebaseDB, 'tweets', tweetId)

  await runTransaction(FirebaseDB, async (transaction) => {
    const tweet = await transaction.get(tweetRef)
    const like = await transaction.get(likeRef)
    if (!tweet.exists()) throw new Error('La publicación ya no está disponible.')
    if (like.exists() === shouldLike) return

    if (shouldLike) {
      transaction.set(likeRef, { tweetId, userId: uid })
    } else {
      transaction.delete(likeRef)
    }
  })
}
