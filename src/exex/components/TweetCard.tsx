import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Tweet } from '../types/social'
import type { User } from '../types/User'

interface TweetCardProps {
  tweet: Tweet
  author: Pick<User, 'uid' | 'fullname' | 'username'>
  onAuthorClick?: () => void
  children?: ReactNode
}

const dateFormatter = new Intl.DateTimeFormat('es-CO', {
  dateStyle: 'medium',
  timeStyle: 'short',
})

export const TweetCard = ({ tweet, author, onAuthorClick, children }: TweetCardProps) => {
  return (
    <article className="card">
      <div className="card-body">
        {onAuthorClick ? (
          <button type="button" onClick={onAuthorClick} className="btn btn-link p-0 text-decoration-none fw-semibold">
            {author.fullname}
          </button>
        ) : (
          <Link to={`/users/${author.uid}`} className="text-decoration-none fw-semibold">
            {author.fullname}
          </Link>
        )}

        <p className="text-body-secondary small mt-1 mb-3">
          {author.username && <>{'@' + author.username}{' · '}</>}
          <time dateTime={tweet.createdAt}>
            {dateFormatter.format(new Date(tweet.createdAt))}
          </time>
        </p>

        <p
          className="mb-0"
          style={{
            whiteSpace: 'pre-wrap',
            overflowWrap: 'anywhere',
          }}
        >
          {tweet.body}
        </p>
        {children}
      </div>
    </article>
  )
}
