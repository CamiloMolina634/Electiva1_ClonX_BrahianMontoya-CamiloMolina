import type { Tweet } from '../exex/types/social'
import type { User } from '../exex/types/User'

interface FeaturedTweet {
  tweet: Tweet
  author: Pick<User, 'uid' | 'fullname' | 'username'>
}

const exampleTweets: FeaturedTweet[] = [
  {
    tweet: {
      id: 'featured-1',
      authorId: 'example-lina',
      body: 'Hoy terminé mi primera ilustración digital. ¿Qué proyecto les gustaría retomar esta semana?',
      createdAt: '2026-11-08T10:00:00-05:00',
    },
    author: { uid: 'example-lina', fullname: 'Lina Torres', username: 'lina_dibuja' },
  },
  {
    tweet: {
      id: 'featured-2',
      authorId: 'example-nico',
      body: 'Encontré una ruta para caminar que pasa por tres parques del barrio. Se aceptan recomendaciones para el próximo recorrido.',
      createdAt: '2026-11-07T16:30:00-05:00',
    },
    author: { uid: 'example-nico', fullname: 'Nicolás Rojas', username: 'nico_camina' },
  },
]

export const getFeaturedTweets = async (): Promise<FeaturedTweet[]> => exampleTweets
