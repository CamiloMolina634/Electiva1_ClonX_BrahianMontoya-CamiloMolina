import { createContext } from 'react'
import type { Tweet } from '../types/social'

interface TweetsContextValue {
  tweets: Tweet[]
  loading: boolean
  loadError: string
  publishTweet: (body: string) => Promise<void>
}

export const TweetsContext = createContext<TweetsContextValue | null>(null)
