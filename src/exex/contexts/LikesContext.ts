import { createContext } from 'react'
import type { Like } from '../types/Like'

interface LikesState {
  likes: Like[]
  currentUserId: string
  ready: boolean
  saving: boolean
  setLiked: (tweetId: string, shouldLike: boolean) => Promise<void>
}

export const LikesContext = createContext<LikesState | null>(null)
