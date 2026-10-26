import { Link } from 'react-router-dom'
import type { User } from '../types/User'

interface UserListItemProps {
  user: User
}

export const UserListItem = ({ user }: UserListItemProps) => {
  return (
    <li className="list-group-item">
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
        <div>
          <p className="fw-semibold mb-1">{user.fullname}</p>
          <p className="text-body-secondary mb-0">@{user.username}</p>
        </div>

        <Link
          to={`/users/${user.uid}`}
          className="btn btn-outline-primary"
          aria-label={`Ver tweets de ${user.fullname}`}
        >
          Ver tweets
        </Link>
      </div>
    </li>
  )
}