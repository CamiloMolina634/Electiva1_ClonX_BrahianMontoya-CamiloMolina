import { useContext } from 'react'
import { LikesContext } from '../contexts/LikesContext'

export const useLikes = () => {
  const context = useContext(LikesContext)
  if (!context) throw new Error('useLikes requiere LikesProvider')
  return context
}
