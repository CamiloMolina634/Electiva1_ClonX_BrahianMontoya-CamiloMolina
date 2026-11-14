import { collection, doc, getDoc, getDocs, Timestamp, type DocumentSnapshot } from 'firebase/firestore'
import { compareFeaturedTweets, getLikeCounts } from '../exex/utils/rankTweets'
import type { Like } from '../exex/types/Like'
import type { Tweet } from '../exex/types/social'
import type { User } from '../exex/types/User'
import { FirebaseDB } from './config'

interface FeaturedTweet {
  tweet: Tweet
  author: Pick<User, 'uid' | 'fullname' | 'username'>
}

export const getFeaturedTweets = async (tweetId?: string): Promise<FeaturedTweet[]> => {
  let documents: DocumentSnapshot[]
  let likes: Like[] = []
  if (tweetId !== undefined) {
    if (!tweetId || tweetId.includes('/')) return []
    documents = [await getDoc(doc(FirebaseDB, 'tweets', tweetId))]
  } else {
    const [tweetsSnapshot, likesSnapshot] = await Promise.all([
      getDocs(collection(FirebaseDB, 'tweets')),
      getDocs(collection(FirebaseDB, 'likes')),
    ])
    documents = tweetsSnapshot.docs
    likes = likesSnapshot.docs.flatMap((document): Like[] => {
      const { tweetId, userId } = document.data()
      return typeof tweetId === 'string' && typeof userId === 'string' ? [{ tweetId, userId }] : []
    })
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
  const counts = getLikeCounts(likes)
  const selectedTweets = tweets.sort((first, second) => compareFeaturedTweets(first, second, counts)).slice(0, 10)
  const authorIds = [...new Set(selectedTweets.map((tweet) => tweet.authorId))]
  const authors = await Promise.all(authorIds.map(async (uid) => {
    const profile = (await getDoc(doc(FirebaseDB, 'publicProfiles', uid))).data()
    return {
      uid,
      fullname: typeof profile?.fullname === 'string' ? profile.fullname : 'Usuario de EXEX',
      username: typeof profile?.username === 'string' ? profile.username : '',
    }
  }))
  const authorsById = new Map(authors.map((author) => [author.uid, author]))

  return selectedTweets.map((tweet) => ({ tweet, author: authorsById.get(tweet.authorId)! }))
}
