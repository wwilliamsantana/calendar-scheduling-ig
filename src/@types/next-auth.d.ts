import NextAuth from 'next-auth/next'

declare module 'next-auth' {
  interface User {
    id: string
    username: string
    name: string
    email: string
    avatar_url: string
  }

  interface Session {
    user: User
  }
}
