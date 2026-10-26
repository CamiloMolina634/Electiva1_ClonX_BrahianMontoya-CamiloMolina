import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ExexRouter } from '../exex/routes/ExexRouter'
import { AuthContext } from '../auth/contexts/AuthContext'
import { LoginPage } from '../auth/pages/LoginPage'

export const BaseRouter = () => {
  const { authState, checking } = useContext(AuthContext)

  if (checking) return <p className="container py-4" role="status">Comprobando sesión…</p>

  return (
    <Routes>
      {authState.logged ? (
        <>
          <Route path="/login" element={<Navigate to="/" replace />} />
          <Route path="/*" element={<ExexRouter />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/login" replace />} />
        </>
      )}
    </Routes>
  )
}
