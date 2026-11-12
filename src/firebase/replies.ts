import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, Timestamp } from 'firebase/firestore'
import type { Tweet } from '../exex/types/social'
import { FirebaseDB } from './config'
import { MAX_TWEET_LENGTH } from './tweets'

const repliesCollection = (tweetId: string) => collection(FirebaseDB, 'tweets', tweetId, 'replies')

export const watchReplies = (
  tweetId: string,
  onReplies: (replies: Tweet[]) => void,
  onError: () => void,
) => onSnapshot(query(repliesCollection(tweetId), orderBy('createdAt')), (snapshot) => {
  onReplies(snapshot.docs.flatMap((reply) => {
    const { authorId, body, createdAt } = reply.data()
    if (typeof authorId !== 'string' || typeof body !== 'string' || !(createdAt instanceof Timestamp)) {
      return []
    }

    return [{
      id: reply.id,
      authorId,
      body,
      createdAt: createdAt.toDate().toISOString(),
    }]
  }))
}, onError)

export const createReply = async (tweetId: string, authorId: string, body: string): Promise<void> => {
  const text = body.trim()
  if (!authorId || !text || text.length > MAX_TWEET_LENGTH) {
    throw new Error('La respuesta debe tener entre 1 y 280 caracteres.')
  }

  await addDoc(repliesCollection(tweetId), {
    authorId,
    body: text,
    createdAt: serverTimestamp(),
  })
}
