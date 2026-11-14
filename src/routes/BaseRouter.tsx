import { useContext } from 'react'
import { Navigate, Route, Routes, useLocation, useMatch } from 'react-router-dom'
import { getAuthRedirect } from '../auth/utils/getAuthRedirect'
import { ExexRouter } from '../exex/routes/ExexRouter'
import { AuthContext } from '../auth/contexts/AuthContext'
import { LoginPage } from '../auth/pages/LoginPage'
import { RegisterPage } from '../auth/pages/RegisterPage'
import { ChooseUsernamePage } from '../auth/pages/ChooseUsernamePage'
import { ExplorePage } from '../exex/pages/ExplorePage'

export const BaseRouter = () => {
  const { authState, checking } = useContext(AuthContext)
  const location = useLocation()
  const redirectTo = getAuthRedirect(location.state)
  const sharedTweetId = useMatch('/tweets/:tweetId')?.params.tweetId
  const guestDestination = sharedTweetId && sharedTweetId !== 'new'
    ? '/explorar?' + new URLSearchParams({ tweet: sharedTweetId })
    : '/login'

  if (checking) return <p className="container py-4" role="status">Comprobando sesión…</p>

  if (authState.logged && !authState.user?.username) return <ChooseUsernamePage />

  return (
    <Routes>
      {authState.logged ? (
        <>
          <Route path="/login" element={<Navigate to={redirectTo} replace />} />
          <Route path="/register" element={<Navigate to={redirectTo} replace />} />
          <Route path="/*" element={<ExexRouter />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/explorar" element={<ExplorePage />} />
          <Route path="/*" element={<Navigate to={guestDestination} state={{ from: location.pathname }} replace />} />
        </>
      )}
    </Routes>
  )
}
