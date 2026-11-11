import { useEffect, useState, type ReactNode } from 'react'
import { createTweet, watchTweets } from '../../firebase/tweets'
import type { Tweet } from '../types/social'
import { TweetsContext } from './TweetsContext'

export const TweetsProvider = ({ uid, children }: { uid: string; children: ReactNode }) => {
  const [savedTweets, setSavedTweets] = useState<Tweet[] | null>(null)
  const [loadError, setLoadError] = useState('')

  useEffect(() => {
    if (!uid) return

    return watchTweets(setSavedTweets, () => {
      setLoadError('No se pudieron cargar los tweets. Revisa la conexión y los permisos.')
    })
  }, [uid])

  const publishTweet = (body: string) => createTweet(uid, body)

  return (
    <TweetsContext.Provider value={{
      tweets: savedTweets ?? [],
      loading: savedTweets === null && !loadError,
      loadError,
      publishTweet,
    }}>
      {children}
    </TweetsContext.Provider>
  )
}
