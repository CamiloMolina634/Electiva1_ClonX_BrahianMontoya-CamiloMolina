import { Link } from 'react-router-dom'
import type { SocialProfile } from '../contexts/FollowsContext'

interface UserListItemProps {
  user: SocialProfile
  isFollowing?: boolean
  followDisabled?: boolean
  onFollow?: (userId: SocialProfile['uid']) => void
}

export const UserListItem = ({
  user,
  isFollowing = false,
  followDisabled = false,
  onFollow,
}: UserListItemProps) => {
  return (
    <li className="list-group-item">
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
        <div>
          <p className="fw-semibold mb-1">{user.fullname}</p>
          <p className="text-body-secondary mb-0">
            @{user.username}
          </p>
        </div>

        <div className="d-flex flex-wrap gap-2">
          <Link
            to={`/users/${user.uid}`}
            className="btn btn-primary"
            aria-label={`Ver tweets de ${user.fullname}`}
          >
            Ver tweets
          </Link>

          {onFollow && (
            <button
              type="button"
              className={
                isFollowing
                  ? 'btn btn-primary'
                  : 'btn btn-primary'
              }
              disabled={followDisabled}
              onClick={() => onFollow(user.uid)}
              aria-label={
                isFollowing
                  ? `Dejar de seguir a ${user.fullname}`
                  : `Seguir a ${user.fullname}`
              }
              title={isFollowing ? 'Dejar de seguir' : undefined}
            >
              {isFollowing ? 'Dejar de seguir' : 'Seguir'}
            </button>
          )}
        </div>
      </div>
    </li>
  )
}
