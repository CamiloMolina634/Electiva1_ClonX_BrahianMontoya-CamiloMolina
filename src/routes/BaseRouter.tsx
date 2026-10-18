import { Route, Routes } from 'react-router-dom'
import { ExexRouter } from '../exex/routes/ExexRouter'

export const BaseRouter = () => (
  <Routes>
    <Route path="/*" element={<ExexRouter />} />
  </Routes>
)
