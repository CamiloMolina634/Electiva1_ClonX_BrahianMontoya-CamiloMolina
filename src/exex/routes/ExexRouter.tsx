import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { PublishTweetPage } from '../pages/PublishTweetPage'
import { TweetsProvider } from '../contexts/TweetsProvider'

export const ExexRouter = () => (
  <TweetsProvider>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="tweets/new" element={<PublishTweetPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </TweetsProvider>
)
