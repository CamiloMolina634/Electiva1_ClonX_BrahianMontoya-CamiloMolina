export interface User {
  id: string
  fullName: string
  username: string
  email: string
  avatarUrl?: string
}

export interface Tweet {
  id: string
  authorId: User['id']
  body: string
  createdAt: string
}
