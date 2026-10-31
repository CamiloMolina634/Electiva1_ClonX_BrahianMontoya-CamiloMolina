import { createContext } from 'react'
import type { Tweet, User } from '../types/social'

interface TweetsContextValue {
  currentUser: User
  tweets: Tweet[]
  publishTweet: (body: string) => Tweet
}

export const TweetsContext = createContext<TweetsContextValue | null>(null)
