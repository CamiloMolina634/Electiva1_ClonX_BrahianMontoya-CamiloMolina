import type { User } from '../exex/types/User'

export const mockUsers: User[] = [
  {
    uid: 'user-brahian',
    photoURL: null,
    fullname: 'Brahian Montoya Obando',
    username: 'brahian',
    email: 'brahian@gmail.com',
  },
  {
    uid: 'user-camilo',
    photoURL: null,
    fullname: 'Camilo Molina',
    username: 'camilo',
    email: 'camilo@gmail.com',
  },
  {
    uid: 'user-valentina',
    photoURL: null,
    fullname: 'Valentina Torres',
    username: 'valentina',
    email: 'valentina@gmail.com',
  },
  {
    uid: 'user-andres',
    photoURL: null,
    fullname: 'Andrés García',
    username: 'andres',
    email: 'andres@gmail.com',
  },
  {
    uid: 'user-maria',
    photoURL: null,
    fullname: 'María Rodríguez',
    username: 'maria',
    email: 'maria@gmail.com',
  },
  {
    uid: 'user-daniel',
    photoURL: null,
    fullname: 'Daniel López',
    username: 'daniel',
    email: 'daniel@gmail.com',
  },
  {
    uid: 'user-sofia',
    photoURL: null,
    fullname: 'Sofía Ramírez',
    username: 'sofia',
    email: 'sofia@gmail.com',
  },
  {
    uid: 'user-carlos',
    photoURL: null,
    fullname: 'Carlos Pérez',
    username: 'carlos',
    email: 'carlos@gmail.com',
  },
  {
    uid: 'user-luisa',
    photoURL: null,
    fullname: 'Luisa Fernández',
    username: 'luisa',
    email: 'luisa@gmail.com',
  },
  {
    uid: 'user-esteban',
    photoURL: null,
    fullname: 'Esteban Martínez',
    username: 'esteban',
    email: 'esteban@gmail.com',
  },
  {
    uid: 'user-ana',
    photoURL: null,
    fullname: 'Ana Gómez',
    username: 'ana',
    email: 'ana@gmail.com',
  },
  {
    uid: 'user-juan',
    photoURL: null,
    fullname: 'Juan Castro',
    username: 'juan',
    email: 'juan@gmail.com',
  },
  {
    uid: 'user-paula',
    photoURL: null,
    fullname: 'Paula Herrera',
    username: 'paula',
    email: 'paula@gmail.com',
  },
]

// Temporary identity until authentication is integrated.
export const mockCurrentUserId: User['uid'] = 'user-brahian'