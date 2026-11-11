import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { mockFollows } from '../../data/follows'
import { mockUsers } from '../../data/users'
import { Pagination } from '../../ui/components/Pagination'
import { UserListItem } from '../components/UserListItem'
import { useFollows } from '../hooks/useFollows'

const PAGE_SIZE = 10
type FollowList = 'followers' | 'following'

interface FollowListContentProps {
  list: FollowList
  userId: string
  fromProfile: boolean
}

const FollowListContent = ({ list, userId, fromProfile }: FollowListContentProps) => {
  const [page, setPage] = useState(1)
  const { users, follows, currentUserId, ready, saving, setFollowing } = useFollows()
  const ownList = userId === currentUserId
  const profile = users.find((user) => user.uid === userId)
  const demoProfile = profile || ownList ? undefined : mockUsers.find((user) => user.uid === userId)
  const profileName = profile?.fullname ?? demoProfile?.fullname
  const showFollowers = list === 'followers'
  const relationships = demoProfile ? mockFollows : follows
  const relatedIds = new Set(showFollowers
    ? relationships.filter((follow) => follow.followingId === userId).map((follow) => follow.followerId)
    : relationships.filter((follow) => follow.followerId === userId).map((follow) => follow.followingId))
  const followingIds = new Set(follows
    .filter((follow) => follow.followerId === currentUserId)
    .map((follow) => follow.followingId))
  const relatedUsers = (demoProfile ? mockUsers : users)
    .filter((user) => relatedIds.has(user.uid) && user.uid !== userId)
    .sort((firstUser, secondUser) =>
      firstUser.fullname.localeCompare(secondUser.fullname, 'es', { sensitivity: 'base' }),
    )

  const totalPages = Math.max(1, Math.ceil(relatedUsers.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const startIndex = (currentPage - 1) * PAGE_SIZE
  const visibleUsers = relatedUsers.slice(startIndex, startIndex + PAGE_SIZE)
  const missingProfile = ready && !ownList && !profile && !demoProfile

  return (
    <main className="container py-4">
      <Link to={fromProfile && !missingProfile ? `/users/${userId}` : '/'} className="btn btn-primary mb-3">
        {fromProfile && !missingProfile ? '← Volver al perfil' : '← Volver al inicio'}
      </Link>

      <h1>{showFollowers ? 'Seguidores' : 'Usuarios seguidos'}</h1>
      {fromProfile && profileName && <p className="text-body-secondary">{profileName}</p>}
      {!fromProfile && ready && (
        <p className="text-body-secondary">
          {showFollowers ? 'Te siguen' : 'Sigues a'} {relatedUsers.length} personas.
        </p>
      )}

      {missingProfile ? (
        <p className="alert alert-info">Usuario no encontrado.</p>
      ) : (ready || demoProfile) && (
        relatedUsers.length === 0 ? (
          <p className="alert alert-info">
            {showFollowers ? 'Todavía no hay seguidores.' : 'Todavía no sigue a ningún usuario.'}
          </p>
        ) : (
          <>
            <ul className="list-group">
              {visibleUsers.map((user) => (
                <UserListItem
                  key={user.uid}
                  user={user}
                  isFollowing={followingIds.has(user.uid)}
                  followDisabled={saving || !ready}
                  onFollow={demoProfile || user.uid === currentUserId
                    ? undefined
                    : (uid) => void setFollowing(uid, !followingIds.has(uid))}
                />
              ))}
            </ul>
            <Pagination page={currentPage} totalPages={totalPages} onPageChange={setPage} />
          </>
        )
      )}
    </main>
  )
}

export const FollowListPage = ({ list }: { list: FollowList }) => {
  const { userId } = useParams()
  const { currentUserId } = useFollows()
  const targetId = userId ?? currentUserId

  return <FollowListContent key={list + ':' + targetId} list={list} userId={targetId} fromProfile={Boolean(userId)} />
}
