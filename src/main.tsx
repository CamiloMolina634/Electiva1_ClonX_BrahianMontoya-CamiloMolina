import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ExexApp } from './ExexApp'
import { AuthProvider } from './auth/contexts/AuthProvider'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ExexApp />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
