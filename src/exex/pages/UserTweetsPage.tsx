import { useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AuthContext } from '../../auth/contexts/AuthContext'
import { PROFILE_IMAGE_TYPES, type ProfileEdit } from '../../auth/profile'
import { mockUsers } from '../../data/users'
import { mockFollows } from '../../data/follows'
import { Pagination } from '../../ui/components/Pagination'
import { EditProfileForm } from '../components/EditProfileForm'
import { TweetCard } from '../components/TweetCard'
import type { SocialProfile } from '../contexts/FollowsContext'
import { useFollows } from '../hooks/useFollows'
import { useTweets } from '../hooks/useTweets'
import './UserTweetsPage.css'

const PAGE_SIZE = 10

interface UserTweetsContentProps {
  userId: string
}

interface ProfileImageShortcutProps {
  label: string
  className: string
  onSelect: (file: File) => void
  children: ReactNode
  disabled: boolean
}

const ProfileImageShortcut = ({ label, className, onSelect, children, disabled }: ProfileImageShortcutProps) => {
  const input = useRef<HTMLInputElement>(null)

  return (
    <>
      <button type="button" className={className} aria-label={label} title={label} disabled={disabled} onClick={() => input.current?.click()}>
        {children}
      </button>
      <input
        ref={input}
        type="file"
        accept={PROFILE_IMAGE_TYPES.join(',')}
        disabled={disabled}
        hidden
        onChange={(event) => {
          const file = event.currentTarget.files?.[0]
          event.currentTarget.value = ''
          if (file) onSelect(file)
        }}
      />
    </>
  )
}

const UserTweetsContent = ({ userId }: UserTweetsContentProps) => {
  const { tweets, loading, loadError } = useTweets()
  const { authState } = useContext(AuthContext)
  const [page, setPage] = useState(1)
  const [editing, setEditing] = useState(false)
  const [savingProfile, setSavingProfile] = useState(false)
  const [selectedImages, setSelectedImages] = useState<Pick<ProfileEdit, 'photo' | 'cover'>>({})
  const [profileSaved, setProfileSaved] = useState(false)
  const editButton = useRef<HTMLButtonElement>(null)
  const restoreEditFocus = useRef(false)
  const { users, follows, currentUserId, ready, saving, setFollowing } = useFollows()
  const ownProfile = userId === currentUserId
  const account: SocialProfile | null = users.find((item) => item.uid === userId) ?? (ownProfile ? authState.user : null)
  const demoUser = account ? undefined : mockUsers.find((item) => item.uid === userId)
  const user = account ?? demoUser
  const bio = account?.bio
  const profileFollows = demoUser ? mockFollows : follows

  useEffect(() => {
    if (!editing && restoreEditFocus.current) {
      editButton.current?.focus()
      restoreEditFocus.current = false
    }
  }, [editing])

  const closeEditor = () => {
    restoreEditFocus.current = true
    setSelectedImages({})
    setEditing(false)
  }

  const openEditor = (images: Pick<ProfileEdit, 'photo' | 'cover'> = {}) => {
    setSelectedImages((current) => ({ ...current, ...images }))
    setProfileSaved(false)
    setEditing(true)
  }

  const isFollowing = follows.some(
    (follow) =>
      follow.followerId === currentUserId &&
      follow.followingId === userId,
  )

  const followersCount = new Set(
    profileFollows
      .filter((follow) => follow.followingId === userId)
      .map((follow) => follow.followerId),
  ).size

  const followingCount = new Set(
    profileFollows
      .filter((follow) => follow.followerId === userId)
      .map((follow) => follow.followingId),
  ).size

  const userTweets = tweets
    .filter((tweet) => tweet.authorId === userId)
    .sort(
      (firstTweet, secondTweet) =>
        new Date(secondTweet.createdAt).getTime() -
        new Date(firstTweet.createdAt).getTime(),
    )

  const totalPages = Math.max(
    1,
    Math.ceil(userTweets.length / PAGE_SIZE),
  )

  const currentPage = Math.min(page, totalPages)
  const startIndex = (currentPage - 1) * PAGE_SIZE
  const visibleTweets = userTweets.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  )

  if (!user && !ready) return null

  if (!user) {
    return (
      <main className="container py-4">
        <h1>Usuario no encontrado</h1>
        <p>No existe un usuario con ese identificador.</p>
        <Link to="/" className="btn btn-primary">← Volver al inicio</Link>
      </main>
    )
  }

  const displayName = user.fullname || user.username || 'Usuario'

  return (
    <main className="profile-page">
      <section aria-labelledby="profile-title">
        <header className="profile-header">
          <Link to="/" className="profile-back link-body-emphasis" aria-label="Volver al inicio">
            <span aria-hidden="true">←</span>
          </Link>
          <div className="text-break">
            <h1 id="profile-title" className="h5 fw-bold mb-0">{displayName}</h1>
            <p className="text-body-secondary small mb-0">
              {userTweets.length} {userTweets.length === 1 ? 'publicación' : 'publicaciones'}
            </p>
          </div>
        </header>

        <div className="profile-cover">
          {account?.coverURL && <img src={account.coverURL} alt="" referrerPolicy="no-referrer" />}
          {ownProfile && (
            <ProfileImageShortcut
              label="Cambiar portada"
              className="profile-cover-edit btn btn-light btn-sm rounded-pill shadow-sm"
              disabled={savingProfile}
              onSelect={(cover) => openEditor({ cover })}
            >
              Cambiar portada
            </ProfileImageShortcut>
          )}
        </div>
        <div className="profile-details">
          <div className="profile-actions">
            <div className="profile-avatar-wrap">
              {user.photoURL ? (
                <img src={user.photoURL} alt="" className="profile-avatar" referrerPolicy="no-referrer" />
              ) : (
                <span className="profile-avatar" aria-hidden="true">
                  {displayName.charAt(0).toUpperCase()}
                </span>
              )}
              {ownProfile && (
                <ProfileImageShortcut
                  label="Cambiar foto de perfil"
                  className="profile-avatar-edit btn btn-light rounded-circle shadow-sm"
                  disabled={savingProfile}
                  onSelect={(photo) => openEditor({ photo })}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M3 7h4l2-3h6l2 3h4v13H3z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                </ProfileImageShortcut>
              )}
            </div>

            {ownProfile && !editing && (
              <button
                type="button"
                ref={editButton}
                className="btn btn-outline-secondary rounded-pill"
                onClick={() => openEditor()}
              >
                Editar perfil
              </button>
            )}

            {!demoUser && !ownProfile && (
              <button
                type="button"
                className="btn btn-primary"
                disabled={saving || !ready}
                onClick={() => void setFollowing(userId, !isFollowing)}
                aria-label={isFollowing ? 'Dejar de seguir a ' + displayName : 'Seguir a ' + displayName}
              >
                {isFollowing ? 'Dejar de seguir' : 'Seguir'}
              </button>
            )}
          </div>

          <p className="h4 fw-bold text-break mb-1">{displayName}</p>
          {user.username && <p className="text-body-secondary text-break mb-0">@{user.username}</p>}
          {bio && <p className="text-break mt-3 mb-0">{bio}</p>}

          <div className="d-flex flex-wrap gap-3 small mt-3">
            <Link to={`/users/${userId}/following`} className="link-body-emphasis link-underline-opacity-0 link-underline-opacity-100-hover">
              <strong>{ready || demoUser ? followingCount : '—'}</strong> seguidos
            </Link>
            <Link to={`/users/${userId}/followers`} className="link-body-emphasis link-underline-opacity-0 link-underline-opacity-100-hover">
              <strong>{ready || demoUser ? followersCount : '—'}</strong> seguidores
            </Link>
          </div>

          {ownProfile && editing && (
            <EditProfileForm
              initialName={user.fullname}
              initialBio={bio ?? ''}
              photo={selectedImages.photo}
              cover={selectedImages.cover}
              saving={savingProfile}
              onSavingChange={setSavingProfile}
              onCancel={closeEditor}
              onSaved={() => {
                setProfileSaved(true)
                closeEditor()
              }}
            />
          )}
          {profileSaved && <p className="text-success mt-3 mb-0" role="status">Perfil actualizado.</p>}
        </div>
      </section>

      <section className="profile-posts" aria-labelledby="profile-posts-title">
        <h2 id="profile-posts-title" className="h5 fw-bold mb-3">Publicaciones</h2>

        {loadError ? (
          <p className="alert alert-danger" role="alert">{loadError}</p>
        ) : loading ? (
          <p role="status">Cargando tweets…</p>
        ) : userTweets.length === 0 ? (
          <p className="text-body-secondary mb-0">Este usuario todavía no ha publicado tweets.</p>
        ) : (
          <>
            <div className="d-grid gap-3">
              {visibleTweets.map((tweet) => (
                <TweetCard
                  showDetailLink
                  key={tweet.id}
                  tweet={tweet}
                  author={user}
                />
              ))}
            </div>

            <Pagination
              page={currentPage}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </>
        )}
      </section>
    </main>
  )
}

export const UserTweetsPage = () => {
  const { userId } = useParams<{ userId: string }>()

  return (
    <UserTweetsContent
      key={userId ?? ''}
      userId={userId ?? ''}
    />
  )
}
