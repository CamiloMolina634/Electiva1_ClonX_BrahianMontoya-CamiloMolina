import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { FollowingPage } from '../pages/FollowingPage'
import { PublishTweetPage } from '../pages/PublishTweetPage'
import { TweetsProvider } from '../contexts/TweetsProvider'
import { FollowersPage } from '../pages/FollowersPage'

export const ExexRouter = () => (
  <TweetsProvider>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="tweets/new" element={<PublishTweetPage />} />
      <Route path="following" element={<FollowingPage />} />
      <Route path="followers" element={<FollowersPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </TweetsProvider>
)
