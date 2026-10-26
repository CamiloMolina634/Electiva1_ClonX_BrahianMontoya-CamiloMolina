import { useState } from 'react'
import { Link } from 'react-router-dom'
import { mockUsers, mockCurrentUserId } from '../../data/users'
import { mockFollows } from '../../data/follows'
import { Pagination } from '../../ui/components/Pagination'
import { UserListItem } from '../components/UserListItem'

const PAGE_SIZE = 10

export const FollowingPage = () => {
  const [page, setPage] = useState(1)

  const followingIds = mockFollows
    .filter((follow) => follow.followerId === mockCurrentUserId)
    .map((follow) => follow.followingId)

  const followedUsers = mockUsers
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

  const startIndex = (page - 1) * PAGE_SIZE

  const visibleUsers = followedUsers.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  )

  return (
    <main className="container py-4">
      <Link to="/" className="d-inline-block mb-3">
        ← Volver al inicio
      </Link>

      <h1>Usuarios seguidos</h1>

      <p className="text-body-secondary">
        Sigues a {followedUsers.length} personas.
      </p>

      {followedUsers.length === 0 ? (
        <p className="alert alert-info">
          Todavía no sigues a ningún usuario.
        </p>
      ) : (
        <>
          <ul className="list-group">
            {visibleUsers.map((user) => (
              <UserListItem key={user.uid} user={user} />
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