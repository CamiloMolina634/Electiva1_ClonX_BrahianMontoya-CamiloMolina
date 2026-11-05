import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFollows } from '../hooks/useFollows'
import { Pagination } from '../../ui/components/Pagination'
import { UserListItem } from '../components/UserListItem'

const PAGE_SIZE = 10

export const FollowingPage = () => {
  const [page, setPage] = useState(1)
  const { users, follows, currentUserId, ready, saving, setFollowing } = useFollows()

  const followingIds = follows
    .filter((follow) => follow.followerId === currentUserId)
    .map((follow) => follow.followingId)

  const followedUsers = users
    .filter((user) => followingIds.includes(user.uid))
    .sort((firstUser, secondUser) =>
      firstUser.fullname.localeCompare(secondUser.fullname, 'es', {
        sensitivity: 'base',
      }),
    )

  const totalPages = Math.max(
    1,
    Math.ceil(followedUsers.length / PAGE_SIZE),
  )

  const currentPage = Math.min(page, totalPages)
  const startIndex = (currentPage - 1) * PAGE_SIZE

  const visibleUsers = followedUsers.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  )

  return (
    <main className="container py-4">
      <Link to="/" className="btn btn-primary mb-3">
        ← Volver al inicio
      </Link>

      <h1>Usuarios seguidos</h1>

      {ready && <p className="text-body-secondary">
        Sigues a {followedUsers.length} personas.
      </p>}

      {ready && (followedUsers.length === 0 ? (
        <p className="alert alert-info">
          Todavía no sigues a ningún usuario.
        </p>
      ) : (
        <>
          <ul className="list-group">
            {visibleUsers.map((user) => (
              <UserListItem
                key={user.uid}
                user={user}
                isFollowing
                onFollow={(uid) => void setFollowing(uid, false)}
                followDisabled={saving}
              />
            ))}
          </ul>

          <Pagination
            page={currentPage}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      ))}
    </main>
  )
}
