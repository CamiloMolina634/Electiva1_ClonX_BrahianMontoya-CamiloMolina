import { useState } from 'react'
import { Link } from 'react-router-dom'
import { mockUsers, mockCurrentUserId } from '../../data/users'
import { mockFollows } from '../../data/follows'
import { Pagination } from '../../ui/components/Pagination'
import { UserListItem } from '../components/UserListItem'
import type { User } from '../types/User'

const PAGE_SIZE = 10

export const FollowersPage = () => {
  const [page, setPage] = useState(1)

  const [followingIds, setFollowingIds] = useState(() =>
    mockFollows
      .filter((follow) => follow.followerId === mockCurrentUserId)
      .map((follow) => follow.followingId),
  )

  const followerIds = mockFollows
    .filter((follow) => follow.followingId === mockCurrentUserId)
    .map((follow) => follow.followerId)

  const followers = mockUsers
    .filter(
      (user) =>
        user.uid !== mockCurrentUserId &&
        followerIds.includes(user.uid),
    )
    .sort((firstUser, secondUser) =>
      firstUser.fullname.localeCompare(secondUser.fullname, 'es', {
        sensitivity: 'base',
      }),
    )

  const totalPages = Math.max(
    1,
    Math.ceil(followers.length / PAGE_SIZE),
  )

  const startIndex = (page - 1) * PAGE_SIZE
  const visibleUsers = followers.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  )

  const handleFollow = (userId: User['uid']) => {
    setFollowingIds((currentIds) =>
      currentIds.includes(userId)
        ? currentIds
        : [...currentIds, userId],
    )
  }

  return (
    <main className="container py-4">
      <Link to="/" className="btn btn-primary mb-3">
        ← Volver al inicio
      </Link>

      <h1>Seguidores</h1>

      <p className="text-body-secondary">
        Te siguen {followers.length} personas.
      </p>

      {followers.length === 0 ? (
        <p className="alert alert-info">
          Todavía no tienes seguidores.
        </p>
      ) : (
        <>
          <ul className="list-group">
            {visibleUsers.map((user) => (
              <UserListItem
                key={user.uid}
                user={user}
                isFollowing={followingIds.includes(user.uid)}
                onFollow={handleFollow}
              />
            ))}
          </ul>

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