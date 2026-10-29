import { mockFollows } from './follows'
import { mockCurrentUserId, mockUsers } from './users'
import type { User } from '../exex/types/User'

interface HomeProfile extends Pick<User, 'fullname' | 'username'> {
  followersCount: number
  followingCount: number
}

const currentUser = mockUsers.find((user) => user.uid === mockCurrentUserId)!

export const mockHomeProfile: HomeProfile = {
  fullname: currentUser.fullname,
  username: currentUser.username,
  followersCount: mockFollows.filter((follow) => follow.followingId === mockCurrentUserId).length,
  followingCount: mockFollows.filter((follow) => follow.followerId === mockCurrentUserId).length,
}
