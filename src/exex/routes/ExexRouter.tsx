import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { FollowingPage } from '../pages/FollowingPage'

export const ExexRouter = () => (
  <Routes>
    <Route index element={<HomePage />} />
    <Route path="following" element={<FollowingPage />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
)
