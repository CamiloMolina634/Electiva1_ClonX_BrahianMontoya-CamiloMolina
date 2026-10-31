import type { Tweet, User } from '../exex/types/social'

// Temporary identity until the authentication contract is agreed with the team.
export const mockCurrentUser: User = {
  id: 'user-brahian',
  fullName: 'Brahian Montoya Obando',
  username: 'brahian',
  email: 'brahian@example.com',
}

export const mockTweets: Tweet[] = [
  {
    id: 'tweet-brahian-1',
    authorId: 'user-brahian',
    body: 'Preparando las nuevas pantallas de EXEX.',
    createdAt: '2026-10-27T09:00:00-05:00',
  },
  ...Array.from({ length: 12 }, (_, index): Tweet => ({
    id: `tweet-camilo-${index + 1}`,
    authorId: 'user-camilo',
    body: `Publicación de prueba ${index + 1} de Camilo en EXEX.`,
    createdAt: new Date(
      Date.UTC(2026, 9, 27, 15, index),
    ).toISOString(),
  })),
  {
    id: 'tweet-ana-1',
    authorId: 'user-ana',
    body: 'Aprendiendo a construir componentes con React.',
    createdAt: '2026-10-26T15:30:00-05:00',
  },
]
