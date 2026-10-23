import { useState } from 'react'
import type { ReactNode } from 'react'
import { mockCurrentUser, mockTweets } from '../../data/tweets'
import type { Tweet } from '../types/social'
import { TweetsContext } from './TweetsContext'

export const TweetsProvider = ({ children }: { children: ReactNode }) => {
  const [tweets, setTweets] = useState<Tweet[]>(() => [...mockTweets])

  const publishTweet = (body: string): Tweet => {
    const text = body.trim()
    if (!text) throw new Error('A tweet must contain text.')
    const tweet: Tweet = {
      id: crypto.randomUUID(),
      authorId: mockCurrentUser.id,
      body: text,
      createdAt: new Date().toISOString(),
    }
    setTweets((previousTweets) => [tweet, ...previousTweets])
    return tweet
  }

  return (
    <TweetsContext.Provider value={{ currentUser: mockCurrentUser, tweets, publishTweet }}>
      {children}
    </TweetsContext.Provider>
  )
}
