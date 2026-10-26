import type { Tweet, User } from '../exex/types/social'

// Temporary identity until the authentication contract is agreed with the team.
export const mockCurrentUser: User = {
  id: 'user-brahian',
  fullName: 'Brahian Montoya Obando',
  username: 'brahian',
  email: 'brahian@example.com',
}

export const mockTweets: Tweet[] = []
