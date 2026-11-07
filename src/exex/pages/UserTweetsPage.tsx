import { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AuthContext } from '../../auth/contexts/AuthContext'
import { mockUsers } from '../../data/users'
import { mockFollows } from '../../data/follows'
import { Pagination } from '../../ui/components/Pagination'
import { TweetCard } from '../components/TweetCard'
import type { SocialProfile } from '../contexts/FollowsContext'
import { useFollows } from '../hooks/useFollows'
import { useTweets } from '../hooks/useTweets'
import './UserTweetsPage.css'

const PAGE_SIZE = 10

interface UserTweetsContentProps {
  userId: string
}

const UserTweetsContent = ({ userId }: UserTweetsContentProps) => {
  const { tweets } = useTweets()
  const { authState } = useContext(AuthContext)
  const [page, setPage] = useState(1)
  const { users, follows, currentUserId, ready, saving, setFollowing } = useFollows()
  const ownProfile = userId === currentUserId
  const account: SocialProfile | null = users.find((item) => item.uid === userId) ?? (ownProfile ? authState.user : null)
  const demoUser = account ? undefined : mockUsers.find((item) => item.uid === userId)
  const user = account ?? demoUser
  const bio = account?.bio
  const profileFollows = demoUser ? mockFollows : follows

  const isFollowing = follows.some(
    (follow) =>
      follow.followerId === currentUserId &&
      follow.followingId === userId,
  )

  const followersCount = new Set(
    profileFollows
      .filter((follow) => follow.followingId === userId)
      .map((follow) => follow.followerId),
  ).size

  const followingCount = new Set(
    profileFollows
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

  if (!user && !ready) return null

  if (!user) {
    return (
      <main className="container py-4">
        <h1>Usuario no encontrado</h1>
        <p>No existe un usuario con ese identificador.</p>
        <Link to="/" className="btn btn-primary">← Volver al inicio</Link>
      </main>
    )
  }

  const displayName = user.fullname || user.username || 'Usuario'

  return (
    <main className="profile-page">
      <section aria-labelledby="profile-title">
        <header className="profile-header">
          <Link to="/" className="profile-back link-body-emphasis" aria-label="Volver al inicio">
            <span aria-hidden="true">←</span>
          </Link>
          <div className="text-break">
            <h1 id="profile-title" className="h5 fw-bold mb-0">{displayName}</h1>
            <p className="text-body-secondary small mb-0">
              {userTweets.length} {userTweets.length === 1 ? 'publicación' : 'publicaciones'}
            </p>
          </div>
        </header>

        <div className="profile-cover" aria-hidden="true" />
        <div className="profile-details">
          <div className="profile-actions">
            {user.photoURL ? (
              <img src={user.photoURL} alt="" className="profile-avatar" referrerPolicy="no-referrer" />
            ) : (
              <span className="profile-avatar" aria-hidden="true">
                {displayName.charAt(0).toUpperCase()}
              </span>
            )}

            {!demoUser && !ownProfile && (
              <button
                type="button"
                className="btn btn-primary"
                disabled={saving || !ready}
                onClick={() => void setFollowing(userId, !isFollowing)}
                aria-label={isFollowing ? 'Dejar de seguir a ' + displayName : 'Seguir a ' + displayName}
              >
                {isFollowing ? 'Dejar de seguir' : 'Seguir'}
              </button>
            )}
          </div>

          <p className="h4 fw-bold text-break mb-1">{displayName}</p>
          {user.username && <p className="text-body-secondary text-break mb-0">@{user.username}</p>}
          {bio && <p className="text-break mt-3 mb-0">{bio}</p>}

          <div className="d-flex flex-wrap gap-3 small mt-3">
            <Link to={`/users/${userId}/following`} className="link-body-emphasis link-underline-opacity-0 link-underline-opacity-100-hover">
              <strong>{ready || demoUser ? followingCount : '—'}</strong> seguidos
            </Link>
            <Link to={`/users/${userId}/followers`} className="link-body-emphasis link-underline-opacity-0 link-underline-opacity-100-hover">
              <strong>{ready || demoUser ? followersCount : '—'}</strong> seguidores
            </Link>
          </div>
        </div>
      </section>

      <section className="profile-posts" aria-labelledby="profile-posts-title">
        <h2 id="profile-posts-title" className="h5 fw-bold mb-3">Publicaciones</h2>

        {userTweets.length === 0 ? (
          <p className="text-body-secondary mb-0">Este usuario todavía no ha publicado tweets.</p>
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
      </section>
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
