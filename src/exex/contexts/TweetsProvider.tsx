import { useEffect, useState, type ReactNode } from 'react'
import { createTweet, watchTweets } from '../../firebase/tweets'
import { setRepost, watchReposts, type Repost } from '../../firebase/reposts'
import type { Tweet } from '../types/social'
import { TweetsContext } from './TweetsContext'

export const TweetsProvider = ({ uid, children }: { uid: string; children: ReactNode }) => {
  const [savedTweets, setSavedTweets] = useState<Tweet[] | null>(null)
  const [loadError, setLoadError] = useState('')
  const [reposts, setReposts] = useState<Repost[] | null>(null)
  const [repostsError, setRepostsError] = useState('')

  useEffect(() => {
    if (!uid) return

    return watchTweets(setSavedTweets, () => {
      setLoadError('No se pudieron cargar los tweets. Revisa la conexión y los permisos.')
    })
  }, [uid])

  useEffect(() => {
    if (!uid) return
    return watchReposts(setReposts, () => setRepostsError('No se pudieron cargar las republicaciones.'))
  }, [uid])

  const publishTweet = (body: string) => createTweet(uid, body)

  return (
    <TweetsContext.Provider value={{
      tweets: savedTweets ?? [],
      loading: savedTweets === null && !loadError,
      loadError,
      publishTweet,
      userId: uid,
      reposts: reposts ?? [],
      repostsReady: reposts !== null && !repostsError,
      repostsError,
      changeRepost: (tweetId, shouldRepost) => setRepost(uid, tweetId, shouldRepost),
    }}>
      {children}
    </TweetsContext.Provider>
  )
}
