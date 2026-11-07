import { useContext } from 'react'
import { FollowsContext } from '../contexts/FollowsContext'

export const useFollows = () => {
  const context = useContext(FollowsContext)
  if (!context) throw new Error('useFollows requiere FollowsProvider')
  return context
}

