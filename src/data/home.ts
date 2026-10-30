import { mockFollows } from './follows'
import { mockCurrentUserId, mockUsers } from './users'
import type { User } from '../exex/types/User'
import type { Tweet } from '../exex/types/social'

// Preview content for the home feed; never persisted or sent to Firebase.
export const mockHomeTweets: Tweet[] = [
  { id: 'home-demo-1', authorId: 'user-camilo', createdAt: '2026-10-29T10:30:00-05:00', body: 'EXEX va tomando forma 🌱\nHoy estamos trabajando en los detalles que hacen más agradable compartir una idea: una interfaz clara, buenos espacios y mucho verde.' },
  { id: 'home-demo-2', authorId: 'user-valentina', createdAt: '2026-10-29T09:45:00-05:00', body: 'Un pequeño recordatorio: descansar también es parte del proceso creativo. Un café, una caminata y de vuelta al proyecto ☕' },
  { id: 'home-demo-3', authorId: 'user-andres', createdAt: '2026-10-29T09:10:00-05:00', body: '¿Qué les ha servido más para aprender React? A mí, construir proyectos pequeños y compartir lo que voy descubriendo. #DesarrolloWeb' },
  { id: 'home-demo-4', authorId: 'user-maria', createdAt: '2026-10-28T17:20:00-05:00', body: 'Mis tres prioridades al diseñar un formulario:\n• Etiquetas claras.\n• Mensajes de error útiles.\n• Que se pueda usar con teclado.\nLos pequeños detalles cuentan.' },
  { id: 'home-demo-5', authorId: 'user-daniel', createdAt: '2026-10-28T15:00:00-05:00', body: 'Terminamos otra sesión de trabajo en equipo 🚀 Nada como ver que las piezas del proyecto empiezan a encajar.' },
  { id: 'home-demo-6', authorId: 'user-sofia', createdAt: '2026-10-28T12:15:00-05:00', body: 'Me gusta este espacio para compartir avances, hacer preguntas y aprender de los demás. ¿En qué están trabajando esta semana?' },
]

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
