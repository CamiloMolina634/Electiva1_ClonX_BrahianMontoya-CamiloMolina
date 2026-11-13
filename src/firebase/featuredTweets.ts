import { collection, doc, getDoc, getDocs, limit, orderBy, query, Timestamp, type DocumentSnapshot } from 'firebase/firestore'
import type { Tweet } from '../exex/types/social'
import type { User } from '../exex/types/User'
import { FirebaseDB } from './config'

interface FeaturedTweet {
  tweet: Tweet
  author: Pick<User, 'uid' | 'fullname' | 'username'>
}

export const getFeaturedTweets = async (tweetId?: string): Promise<FeaturedTweet[]> => {
  let documents: DocumentSnapshot[]
  if (tweetId !== undefined) {
    if (!tweetId || tweetId.includes('/')) return []
    documents = [await getDoc(doc(FirebaseDB, 'tweets', tweetId))]
  } else {
    documents = (await getDocs(query(collection(FirebaseDB, 'tweets'), orderBy('createdAt', 'desc'), limit(10)))).docs
  }
  const tweets = documents.flatMap((document): Tweet[] => {
    const { authorId, body, createdAt, mediaUrl } = document.data() ?? {}
    if (typeof authorId !== 'string' || !authorId || authorId.includes('/') ||
      typeof body !== 'string' || !(createdAt instanceof Timestamp)) return []
    return [{
      id: document.id,
      authorId,
      body,
      createdAt: createdAt.toDate().toISOString(),
      mediaUrl: typeof mediaUrl === 'string' && mediaUrl.startsWith('https://firebasestorage.googleapis.com/')
        ? mediaUrl
        : undefined,
    }]
  })
  const authorIds = [...new Set(tweets.map((tweet) => tweet.authorId))]
  const authors = await Promise.all(authorIds.map(async (uid) => {
    const profile = (await getDoc(doc(FirebaseDB, 'publicProfiles', uid))).data()
    return {
      uid,
      fullname: typeof profile?.fullname === 'string' ? profile.fullname : 'Usuario de EXEX',
      username: typeof profile?.username === 'string' ? profile.username : '',
    }
  }))
  const authorsById = new Map(authors.map((author) => [author.uid, author]))

  return tweets.map((tweet) => ({ tweet, author: authorsById.get(tweet.authorId)! }))
}
