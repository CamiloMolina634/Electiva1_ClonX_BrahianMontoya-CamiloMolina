import { useContext } from 'react'
import { AuthContext } from '../../auth/contexts/AuthContext'
import { FollowsProvider } from '../contexts/FollowsProvider'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ExexSidebar } from '../components/ExexSidebar'
import { HomePage } from '../pages/HomePage'
import { FollowListPage } from '../pages/FollowListPage'

import { PublishTweetPage } from '../pages/PublishTweetPage'
import { TweetsProvider } from '../contexts/TweetsProvider'
import { LikesProvider } from '../contexts/LikesProvider'
import { UserTweetsPage } from '../pages/UserTweetsPage'

export const ExexRouter = () => {
  const { authState } = useContext(AuthContext)
  const uid = authState.user?.uid ?? ''

  return (
    <FollowsProvider key={uid} uid={uid}>
      <TweetsProvider uid={uid}>
        <LikesProvider uid={uid}>
          <div className="exex-shell">
            <ExexSidebar />
            <div className="exex-content">
              <Routes>
                <Route index element={<HomePage />} />
                <Route path="tweets/new" element={<PublishTweetPage />} />
                <Route path="following" element={<FollowListPage list="following" />} />
                <Route path="followers" element={<FollowListPage list="followers" />} />
                <Route path="users/:userId" element={<UserTweetsPage />} />
                <Route path="users/:userId/following" element={<FollowListPage list="following" />} />
                <Route path="users/:userId/followers" element={<FollowListPage list="followers" />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </div>
        </LikesProvider>
      </TweetsProvider>
    </FollowsProvider>
  )
}
