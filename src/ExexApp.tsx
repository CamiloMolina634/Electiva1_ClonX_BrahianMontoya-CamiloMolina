import { BaseRouter } from './routes/BaseRouter'
import { NavBar } from './ui/components/NavBar'
import { ThemeToggle } from './ui/components/ThemeToggle'

export const ExexApp = () => (
  <>
    <NavBar />
    <BaseRouter />
    <ThemeToggle />
  </>
)
