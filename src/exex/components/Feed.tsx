import { useContext, useState } from 'react'
import { AuthContext } from '../../auth/contexts/AuthContext'
import { Pagination } from '../../ui/components/Pagination'
import { useFollows } from '../hooks/useFollows'
import { useTweets } from '../hooks/useTweets'
import { useLikes } from '../hooks/useLikes'
import { compareFeaturedTweets, getLikeCounts } from '../utils/rankTweets'
import { getFeedTweets } from '../utils/getFeedTweets'
import { TweetCard } from './TweetCard'

const PAGE_SIZE = 10

export const Feed = ({ mode = 'following' }: { mode?: 'all' | 'following' }) => {
  const { authState } = useContext(AuthContext)
  const { users, follows, currentUserId, ready } = useFollows()
  const { tweets, loading, loadError, reposts, repostsError } = useTweets()
  const [page, setPage] = useState(1)
  const { likes, ready: likesReady } = useLikes()
  const [rankingLikes, setRankingLikes] = useState<Map<string, number> | null>(
    () => likesReady ? getLikeCounts(likes) : null,
  )

  if (mode === 'all' && likesReady && rankingLikes === null) {
    setRankingLikes(getLikeCounts(likes))
  }

  const likeCounts = rankingLikes ?? getLikeCounts(likes)

  const authors = new Map(users.map((user) => [user.uid, user]))
  if (authState.user) authors.set(authState.user.uid, authState.user)

  const sourceTweets = mode === 'all' ? tweets : getFeedTweets(tweets, follows, currentUserId)
  const originalEntries = sourceTweets.flatMap((tweet) => {
    const author = authors.get(tweet.authorId)
    return author ? [{ id: tweet.id, tweet, author, createdAt: tweet.createdAt, reposter: '' }] : []
  })

  const followedIds = new Set(follows
    .filter((follow) => follow.followerId === currentUserId)
    .map((follow) => follow.followingId))
  const tweetsById = new Map(tweets.map((tweet) => [tweet.id, tweet]))
  const repostEntries = reposts.flatMap((repost) => {
    if (mode === 'following' && repost.userId !== currentUserId && !followedIds.has(repost.userId)) return []
    const tweet = tweetsById.get(repost.tweetId)
    const reposter = authors.get(repost.userId)
    if (!tweet || !reposter) return []
    const author = authors.get(tweet.authorId)
    if (!author) return []

    return [{
      id: 'repost:' + repost.id,
      tweet,
      author,
      createdAt: repost.createdAt,
      reposter: reposter.fullname || reposter.username || 'Usuario de EXEX',
    }]
  })
  const feedTweets = [...originalEntries, ...repostEntries]
    .sort((first, second) => mode === 'all'
      ? compareFeaturedTweets(first.tweet, second.tweet, likeCounts)
        || second.createdAt.localeCompare(first.createdAt)
      : second.createdAt.localeCompare(first.createdAt))

  const totalPages = Math.max(1, Math.ceil(feedTweets.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const startIndex = (currentPage - 1) * PAGE_SIZE
  const visibleTweets = feedTweets.slice(startIndex, startIndex + PAGE_SIZE)

  return (
    <section className="home-timeline" aria-label="Publicaciones">
      {repostsError && <p className="alert alert-warning m-3" role="alert">{repostsError}</p>}
      {loadError ? (
        <p className="alert alert-danger m-3" role="alert">{loadError}</p>
      ) : loading || !ready ? (
        <p className="m-3" role="status">Cargando publicaciones…</p>
      ) : feedTweets.length === 0 ? (
        <p className="alert alert-light m-3" role="status">
          {mode === 'all' ? 'Todavía no hay publicaciones en EXEX.' : 'Todavía no hay publicaciones tuyas ni de las personas que sigues.'}
        </p>
      ) : (
        <>
          <div className="home-tweet-list">
            {visibleTweets.map(({ id, tweet, author, reposter }) => (
              <div key={id}>
                {reposter && <p className="text-body-secondary small mb-1">Republicado por {reposter}</p>}
                <TweetCard showDetailLink tweet={tweet} author={author} />
              </div>
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
