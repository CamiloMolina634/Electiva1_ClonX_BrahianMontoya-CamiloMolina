import type { User } from './User'

export interface Follow {
  followerId: User['uid']
  followingId: User['uid']
}