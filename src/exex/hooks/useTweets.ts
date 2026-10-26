import { useContext } from 'react'
import { TweetsContext } from '../contexts/TweetsContext'

export const useTweets = () => {
  const context = useContext(TweetsContext)
  if (!context) throw new Error('useTweets must be used inside TweetsProvider.')
  return context
}
