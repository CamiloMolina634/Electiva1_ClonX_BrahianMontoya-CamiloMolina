import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFollows } from '../hooks/useFollows'
import { Pagination } from '../../ui/components/Pagination'
import { UserListItem } from '../components/UserListItem'


const PAGE_SIZE = 10

export const FollowersPage = () => {
  const [page, setPage] = useState(1)
  const { users, follows, currentUserId, ready, saving, setFollowing } = useFollows()

  const followingIds = follows.filter((relation) => relation.followerId === currentUserId).map((relation) => relation.followingId)

  const followerIds = follows
    .filter((follow) => follow.followingId === currentUserId)
    .map((follow) => follow.followerId)

  const followers = users
    .filter(
      (user) =>
        user.uid !== currentUserId &&
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

  const currentPage = Math.min(page, totalPages)
  const startIndex = (currentPage - 1) * PAGE_SIZE
  const visibleUsers = followers.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  )

  return (
    <main className="container py-4">
      <Link to="/" className="btn btn-primary mb-3">
        ← Volver al inicio
      </Link>

      <h1>Seguidores</h1>

      {ready && <p className="text-body-secondary">
        Te siguen {followers.length} personas.
      </p>}

      {ready && (followers.length === 0 ? (
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
                onFollow={(uid) => void setFollowing(uid, !followingIds.includes(uid))}
                followDisabled={saving || !ready}
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
