import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { FollowingPage } from '../pages/FollowingPage'
import { FollowersPendingPage } from '../pages/FollowersPendingPage'
import { PublishTweetPage } from '../pages/PublishTweetPage'
import { TweetsProvider } from '../contexts/TweetsProvider'

export const ExexRouter = () => (
  <TweetsProvider>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="tweets/new" element={<PublishTweetPage />} />
      <Route path="following" element={<FollowingPage />} />
      <Route path="followers" element={<FollowersPendingPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </TweetsProvider>
)
