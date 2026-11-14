import { collection, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc, Timestamp } from 'firebase/firestore'
import type { Tweet } from '../exex/types/social'
import { FirebaseDB } from './config'
import { removeTweetMedia, uploadTweetMedia } from './tweetMedia'

export const MAX_TWEET_LENGTH = 280

const tweetsCollection = collection(FirebaseDB, 'tweets')

export const watchTweets = (
  onTweets: (tweets: Tweet[]) => void,
  onError: () => void,
) => onSnapshot(query(tweetsCollection, orderBy('createdAt', 'desc')), (snapshot) => {
  onTweets(snapshot.docs.flatMap((tweet) => {
    const { authorId, body, createdAt, mediaUrl } = tweet.data()
    if (typeof authorId !== 'string' || typeof body !== 'string' || !(createdAt instanceof Timestamp)) {
      return []
    }

    return [{
      id: tweet.id,
      authorId,
      body,
      createdAt: createdAt.toDate().toISOString(),
      mediaUrl: typeof mediaUrl === 'string' && mediaUrl.startsWith('https://firebasestorage.googleapis.com/')
        ? mediaUrl
        : undefined,
    }]
  }))
}, onError)

export const createTweet = async (authorId: string, body: string, attachment?: File): Promise<void> => {
  const text = body.trim()
  if (!authorId || !text || text.length > MAX_TWEET_LENGTH) {
    throw new Error('El tweet debe tener entre 1 y 280 caracteres.')
  }

  const tweet = doc(tweetsCollection)
  const mediaUrl = attachment ? await uploadTweetMedia(authorId, tweet.id, attachment) : undefined
  try {
    await setDoc(tweet, {
      authorId,
      body: text,
      createdAt: serverTimestamp(),
      ...(mediaUrl ? { mediaUrl } : {}),
    })
  } catch (error) {
    if (mediaUrl) await removeTweetMedia(authorId, tweet.id).catch(() => undefined)
    throw error
  }
}
