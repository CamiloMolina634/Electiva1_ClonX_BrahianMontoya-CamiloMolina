import { createContext } from 'react'
import type { Follow } from '../types/Follow'
import type { User } from '../types/User'

export type SocialProfile = Pick<User, 'uid' | 'fullname' | 'username' | 'photoURL'> & {
  bio?: string
  coverURL?: string
}

export interface FollowsState {
  users: SocialProfile[]
  follows: Follow[]
  currentUserId: string
  ready: boolean
  saving: boolean
  setFollowing: (uid: string, shouldFollow: boolean) => Promise<void>
}

export const FollowsContext = createContext<FollowsState | null>(null)

