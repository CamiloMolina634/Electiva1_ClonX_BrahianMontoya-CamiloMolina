import { useContext } from 'react'
import { AuthContext } from '../../auth/contexts/AuthContext'
import { FollowsProvider } from '../contexts/FollowsProvider'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { FollowingPage } from '../pages/FollowingPage'

import { PublishTweetPage } from '../pages/PublishTweetPage'
import { TweetsProvider } from '../contexts/TweetsProvider'
import { FollowersPage } from '../pages/FollowersPage'
import { UserTweetsPage } from '../pages/UserTweetsPage'

export const ExexRouter = () => {
  const { authState } = useContext(AuthContext)
  const uid = authState.user?.uid ?? ''

  return (
    <FollowsProvider key={uid} uid={uid}>
      <TweetsProvider>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="tweets/new" element={<PublishTweetPage />} />
          <Route path="following" element={<FollowingPage />} />
          <Route path="followers" element={<FollowersPage />} />
          <Route path="users/:userId" element={<UserTweetsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </TweetsProvider>
    </FollowsProvider>
  )
}
