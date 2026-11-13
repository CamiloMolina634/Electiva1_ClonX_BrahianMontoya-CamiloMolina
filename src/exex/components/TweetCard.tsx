import { useContext, type ReactNode } from 'react'
import { LikesContext } from '../contexts/LikesContext'
import { LikeButton } from './LikeButton'
import { Link } from 'react-router-dom'
import type { Tweet } from '../types/social'
import type { User } from '../types/User'

import { RepostButton } from './RepostButton'

interface TweetCardProps {
  tweet: Tweet
  showDetailLink?: boolean
  canRepost?: boolean
  author: Pick<User, 'uid' | 'fullname' | 'username'>
  onAuthorClick?: () => void
  children?: ReactNode
}

const dateFormatter = new Intl.DateTimeFormat('es-CO', {
  dateStyle: 'medium',
  timeStyle: 'short',
})

export const TweetCard = ({
  tweet,
  author,
  showDetailLink = false,
  canRepost = showDetailLink,
  onAuthorClick,
  children,
}: TweetCardProps) => {
  const likes = useContext(LikesContext)

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
        {tweet.mediaUrl && (
          <img
            src={tweet.mediaUrl}
            alt="Imagen adjunta a la publicación"
            className="img-fluid rounded mt-3"
            loading="lazy"
          />
        )}
        {likes && (showDetailLink || canRepost) && <LikeButton tweetId={tweet.id} />}
        {canRepost && <RepostButton tweetId={tweet.id} />}
        {showDetailLink && (
          <Link className="d-inline-block mt-3" to={'/tweets/' + tweet.id}>
            Ver publicación y respuestas
          </Link>
        )}
        {children}
      </div>
    </article>
  )
}
