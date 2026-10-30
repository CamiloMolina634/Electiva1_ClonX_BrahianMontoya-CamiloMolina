import { useState } from 'react'
import { mockUsers } from '../../data/users'
import { mockFollows } from '../../data/follows'
import { Pagination } from '../../ui/components/Pagination'
import { useTweets } from '../hooks/useTweets'
import { getFeedTweets } from '../utils/getFeedTweets'
import { TweetCard } from './TweetCard'

const PAGE_SIZE = 10

export const Feed = () => {
  const { tweets, currentUser } = useTweets()
  const [page, setPage] = useState(1)

  const feedTweets = getFeedTweets(
    tweets,
    mockFollows,
    currentUser.id,
  ).filter((tweet) =>
    mockUsers.some((user) => user.uid === tweet.authorId),
  )

  const totalPages = Math.max(
    1,
    Math.ceil(feedTweets.length / PAGE_SIZE),
  )

  const currentPage = Math.min(page, totalPages)
  const startIndex = (currentPage - 1) * PAGE_SIZE

  const visibleTweets = feedTweets.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  )

  return (
    <section className="p-3" aria-labelledby="feed-heading">
      <h2 id="feed-heading" className="h5 mb-3">
        Publicaciones recientes
      </h2>

      {feedTweets.length === 0 ? (
        <p className="alert alert-info">
          Todavía no hay publicaciones tuyas ni de las
          personas que sigues.
        </p>
      ) : (
        <>
          <div className="d-grid gap-3">
            {visibleTweets.map((tweet) => {
              const author = mockUsers.find(
                (user) => user.uid === tweet.authorId,
              )

              if (!author) return null

              return (
                <TweetCard
                  key={tweet.id}
                  tweet={tweet}
                  author={author}
                />
              )
            })}
          </div>

          <Pagination
            page={currentPage}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </section>
  )
}