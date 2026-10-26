import { Link } from 'react-router-dom'
import type { User } from '../types/User'

interface UserListItemProps {
  user: User
  isFollowing?: boolean
  onFollow?: (userId: User['uid']) => void
}

export const UserListItem = ({
  user,
  isFollowing = false,
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
            className="btn btn-outline-primary"
            aria-label={`Ver tweets de ${user.fullname}`}
          >
            Ver tweets
          </Link>

          {onFollow && (
            <button
              type="button"
              className={
                isFollowing
                  ? 'btn btn-outline-secondary'
                  : 'btn btn-primary'
              }
              disabled={isFollowing}
              onClick={() => onFollow(user.uid)}
              aria-label={
                isFollowing
                  ? `Ya sigues a ${user.fullname}`
                  : `Seguir a ${user.fullname}`
              }
            >
              {isFollowing ? 'Siguiendo' : 'Seguir'}
            </button>
          )}
        </div>
      </div>
    </li>
  )
}