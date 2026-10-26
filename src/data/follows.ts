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
  { followerId: mockCurrentUserId, followingId: 'user-ana' },
  { followerId: mockCurrentUserId, followingId: 'user-juan' },
  { followerId: mockCurrentUserId, followingId: 'user-paula' },
]