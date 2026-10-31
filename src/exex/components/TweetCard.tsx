import { Link } from 'react-router-dom'
import type { Tweet } from '../types/social'
import type { User } from '../types/User'

interface TweetCardProps {
  tweet: Tweet
  author: User
}

const dateFormatter = new Intl.DateTimeFormat('es-CO', {
  dateStyle: 'medium',
  timeStyle: 'short',
})

export const TweetCard = ({ tweet, author }: TweetCardProps) => {
  return (
    <article className="card">
      <div className="card-body">
        <Link
          to={`/users/${author.uid}`}
          className="text-decoration-none fw-semibold"
        >
          {author.fullname}
        </Link>

        <p className="text-body-secondary small mt-1 mb-3">
          @{author.username}
          {' · '}
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
      </div>
    </article>
  )
}