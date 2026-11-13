import { createContext } from 'react'
import type { Tweet } from '../types/social'

import type { Repost } from '../../firebase/reposts'

interface TweetsContextValue {
  tweets: Tweet[]
  userId: string
  reposts: Repost[]
  repostsReady: boolean
  repostsError: string
  changeRepost: (tweetId: string, shouldRepost: boolean) => Promise<void>
  loading: boolean
  loadError: string
  publishTweet: (body: string, attachment?: File) => Promise<void>
}

export const TweetsContext = createContext<TweetsContextValue | null>(null)
