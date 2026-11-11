import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, Timestamp } from 'firebase/firestore'
import type { Tweet } from '../exex/types/social'
import { FirebaseDB } from './config'

export const MAX_TWEET_LENGTH = 280

const tweetsCollection = collection(FirebaseDB, 'tweets')

export const watchTweets = (
  onTweets: (tweets: Tweet[]) => void,
  onError: () => void,
) => onSnapshot(query(tweetsCollection, orderBy('createdAt', 'desc')), (snapshot) => {
  onTweets(snapshot.docs.flatMap((tweet) => {
    const { authorId, body, createdAt } = tweet.data()
    if (typeof authorId !== 'string' || typeof body !== 'string' || !(createdAt instanceof Timestamp)) {
      return []
    }

    return [{
      id: tweet.id,
      authorId,
      body,
      createdAt: createdAt.toDate().toISOString(),
    }]
  }))
}, onError)

export const createTweet = async (authorId: string, body: string): Promise<void> => {
  const text = body.trim()
  if (!authorId || !text || text.length > MAX_TWEET_LENGTH) {
    throw new Error('El tweet debe tener entre 1 y 280 caracteres.')
  }

  await addDoc(tweetsCollection, {
    authorId,
    body: text,
    createdAt: serverTimestamp(),
  })
}
