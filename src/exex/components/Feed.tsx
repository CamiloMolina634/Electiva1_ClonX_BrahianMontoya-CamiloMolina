import { useContext, useState } from 'react'
import { AuthContext } from '../../auth/contexts/AuthContext'
import { Pagination } from '../../ui/components/Pagination'
import { useFollows } from '../hooks/useFollows'
import { useTweets } from '../hooks/useTweets'
import { getFeedTweets } from '../utils/getFeedTweets'
import { TweetCard } from './TweetCard'

const PAGE_SIZE = 10

export const Feed = () => {
  const { authState } = useContext(AuthContext)
  const { users, follows, currentUserId, ready } = useFollows()
  const { tweets, loading, loadError } = useTweets()
  const [page, setPage] = useState(1)

  const authors = new Map(users.map((user) => [user.uid, user]))
  if (authState.user) authors.set(authState.user.uid, authState.user)

  const feedTweets = getFeedTweets(tweets, follows, currentUserId).flatMap((tweet) => {
    const author = authors.get(tweet.authorId)
    return author ? [{ tweet, author }] : []
  })

  const totalPages = Math.max(1, Math.ceil(feedTweets.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const startIndex = (currentPage - 1) * PAGE_SIZE
  const visibleTweets = feedTweets.slice(startIndex, startIndex + PAGE_SIZE)

  return (
    <section className="home-timeline" aria-label="Publicaciones">
      {loadError ? (
        <p className="alert alert-danger m-3" role="alert">{loadError}</p>
      ) : loading || !ready ? (
        <p className="m-3" role="status">Cargando publicaciones…</p>
      ) : feedTweets.length === 0 ? (
        <p className="alert alert-light m-3" role="status">
          Todavía no hay publicaciones tuyas ni de las personas que sigues.
        </p>
      ) : (
        <>
          <div className="home-tweet-list">
            {visibleTweets.map(({ tweet, author }) => (
              <TweetCard showDetailLink key={tweet.id} tweet={tweet} author={author} />
            ))}
          </div>
          <div className="px-3 pb-4">
            <Pagination
              page={currentPage}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </div>
        </>
      )}
    </section>
  )
}
