import type { Follow } from '../exex/types/Follow'
import { mockCurrentUserId } from './users'

export const mockFollows: Follow[] = [
  { followerId: mockCurrentUserId, followingId: 'user-camilo' },
  { followerId: mockCurrentUserId, followingId: 'user-valentina' },
  { followerId: mockCurrentUserId, followingId: 'user-andres' },
  { followerId: mockCurrentUserId, followingId: 'user-maria' },
  { followerId: mockCurrentUserId, followingId: 'user-daniel' },
  { followerId: mockCurrentUserId, followingId: 'user-sofia' },
  { followerId: mockCurrentUserId, followingId: 'user-carlos' },
  { followerId: mockCurrentUserId, followingId: 'user-luisa' },
  { followerId: mockCurrentUserId, followingId: 'user-esteban' },
  { followerId: mockCurrentUserId, followingId: 'user-juan' },
  { followerId: mockCurrentUserId, followingId: 'user-paula' },
  { followerId: 'user-camilo', followingId: mockCurrentUserId },
  { followerId: 'user-valentina', followingId: mockCurrentUserId },
  { followerId: 'user-andres', followingId: mockCurrentUserId },
  { followerId: 'user-maria', followingId: mockCurrentUserId },
  { followerId: 'user-daniel', followingId: mockCurrentUserId },
  { followerId: 'user-sofia', followingId: mockCurrentUserId },
  { followerId: 'user-carlos', followingId: mockCurrentUserId },
  { followerId: 'user-luisa', followingId: mockCurrentUserId },
  { followerId: 'user-esteban', followingId: mockCurrentUserId },
  { followerId: 'user-ana', followingId: mockCurrentUserId },
  { followerId: 'user-juan', followingId: mockCurrentUserId },
  { followerId: 'user-paula', followingId: mockCurrentUserId },
]