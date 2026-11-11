import { createContext } from 'react'
import type { Tweet, User } from '../types/social'

interface TweetsContextValue {
  currentUser: User
  tweets: Tweet[]
  loading: boolean
  loadError: string
  publishTweet: (body: string) => Promise<void>
}

export const TweetsContext = createContext<TweetsContextValue | null>(null)
