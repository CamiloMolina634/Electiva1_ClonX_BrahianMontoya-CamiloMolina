import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { mockUsers, mockCurrentUserId } from '../../data/users'
import { mockFollows } from '../../data/follows'
import { Pagination } from '../../ui/components/Pagination'
import { TweetCard } from '../components/TweetCard'
import { useTweets } from '../hooks/useTweets'

const PAGE_SIZE = 10

interface UserTweetsContentProps {
  userId: string
}

const UserTweetsContent = ({ userId }: UserTweetsContentProps) => {
  const { tweets } = useTweets()
  const [page, setPage] = useState(1)
  const [follows, setFollows] = useState(() => [...mockFollows])

  const user = mockUsers.find((item) => item.uid === userId)

  const isFollowing = follows.some(
    (follow) =>
      follow.followerId === mockCurrentUserId &&
      follow.followingId === userId,
  )

  const followersCount = new Set(
    follows
      .filter((follow) => follow.followingId === userId)
      .map((follow) => follow.followerId),
  ).size

  const followingCount = new Set(
    follows
      .filter((follow) => follow.followerId === userId)
      .map((follow) => follow.followingId),
  ).size

  const userTweets = tweets
    .filter((tweet) => tweet.authorId === userId)
    .sort(
      (firstTweet, secondTweet) =>
        new Date(secondTweet.createdAt).getTime() -
        new Date(firstTweet.createdAt).getTime(),
    )

  const totalPages = Math.max(
    1,
    Math.ceil(userTweets.length / PAGE_SIZE),
  )

  const startIndex = (page - 1) * PAGE_SIZE
  const visibleTweets = userTweets.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  )

  const handleFollow = () => {
    if (userId === mockCurrentUserId) return

    setFollows((currentFollows) => {
      const alreadyFollowing = currentFollows.some(
        (follow) =>
          follow.followerId === mockCurrentUserId &&
          follow.followingId === userId,
      )

      if (alreadyFollowing) return currentFollows

      return [
        ...currentFollows,
        {
          followerId: mockCurrentUserId,
          followingId: userId,
        },
      ]
    })
  }

  if (!user) {
    return (
      <main className="container py-4">
        <h1>Usuario no encontrado</h1>
        <p>No existe un usuario con ese identificador.</p>
        <Link to="/">Volver al inicio</Link>
      </main>
    )
  }

  return (
    <main className="container py-4">
      <Link to="/" className="d-inline-block mb-3">
        ← Volver al inicio
      </Link>

      <section className="card mb-4">
        <div className="card-body">
          <h1 className="h2">{user.fullname}</h1>
          <p className="text-body-secondary">@{user.username}</p>

          <div className="d-flex flex-wrap gap-3 mb-3">
            <span>
              <strong>{followersCount}</strong> seguidores
            </span>
            <span>
              <strong>{followingCount}</strong> seguidos
            </span>
          </div>

          {userId !== mockCurrentUserId && (
            <button
              type="button"
              className={
                isFollowing
                  ? 'btn btn-outline-secondary'
                  : 'btn btn-primary'
              }
              disabled={isFollowing}
              onClick={handleFollow}
            >
              {isFollowing ? 'Siguiendo' : 'Seguir'}
            </button>
          )}
        </div>
      </section>

      <h2 className="h4 mb-3">Tweets</h2>

      {userTweets.length === 0 ? (
        <p className="alert alert-info">
          Este usuario todavía no ha publicado tweets.
        </p>
      ) : (
        <>
          <div className="d-grid gap-3">
            {visibleTweets.map((tweet) => (
              <TweetCard
                key={tweet.id}
                tweet={tweet}
                author={user}
              />
            ))}
          </div>

          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </main>
  )
}

export const UserTweetsPage = () => {
  const { userId } = useParams<{ userId: string }>()

  return (
    <UserTweetsContent
      key={userId ?? ''}
      userId={userId ?? ''}
    />
  )
}