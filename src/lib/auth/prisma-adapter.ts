import { Adapter } from 'next-auth/adapters'
import { prisma } from '../prisma'

export function PrismaAdapter(): Adapter {
  return {
    async createUser(user) { },

    async getUser(id) {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      })

      if (!user) {
        return null
      }

      return {
        id: user.id,
        email: user.email!,
        name: user.name,
        avatar_url: user.avatar_url!,
        username: user.username,
        emailVerified: null,
      }
    },

    async getUserByEmail(email) {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      })

      if (!user) {
        return null
      }

      return {
        id: user.id,
        email: user.email!,
        name: user.name,
        avatar_url: user.avatar_url!,
        username: user.username,
        emailVerified: null,
      }
    },

    async getUserByAccount({ providerAccountId, provider }) {
      const account = await prisma.account.findUnique({
        where: {
          provider_providerAccountId: {
            provider,
            providerAccountId,
          },
        },
        include: {
          user: true,
        },
      })

      if (!account) {
        return null
      }

      const { user } = account

      return {
        id: user.id,
        email: user.email!,
        name: user.name,
        avatar_url: user.avatar_url!,
        username: user.username,
        emailVerified: null,
      }
    },

    async updateUser(user) {
      const prismaUser = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          name: user.name,
          email: user.email,
          avatar_url: user.avatar_url,
        },
      })

      return {
        id: prismaUser.id,
        email: prismaUser.email!,
        name: prismaUser.name,
        avatar_url: prismaUser.avatar_url!,
        username: prismaUser.username,
        emailVerified: null,
      }
    },

    async linkAccount(account) {
      await prisma.account.create({
        data: {
          userId: account.userId,
          type: account.type,
          provider: account.provider,
          providerAccountId: account.providerAccountId,
          access_token: account.access_token,
          expires_at: account.expires_at,
          token_type: account.token_type,
          scope: account.scope,
          id_token: account.id_token,
          session_state: account.session_state,
        },
      })
    },

    async createSession({ sessionToken, userId, expires }) {
      await prisma.session.create({
        data: {
          expires,
          sessionToken,
          userId,
        },
      })

      return {
        userId,
        sessionToken,
        expires,
      }
    },

    async getSessionAndUser(sessionToken) {
      const prismaSession = await prisma.session.findUnique({
        where: {
          sessionToken,
        },
        include: {
          user: true,
        },
      })

      if (!prismaSession) {
        return null
      }

      const { user, ...sessions } = prismaSession

      return {
        session: {
          expires: sessions.expires,
          sessionToken: sessions.sessionToken,
          userId: sessions.userId,
        },
        user: {
          id: user.id,
          email: user.email!,
          name: user.name,
          avatar_url: user.avatar_url!,
          username: user.username,
          emailVerified: null,
        },
      }
    },

    async updateSession({ sessionToken, userId, expires }) {
      const prismaSession = await prisma.session.update({
        where: {
          sessionToken,
        },
        data: {
          expires,
          userId,
        },
      })

      return {
        expires: prismaSession.expires,
        sessionToken: prismaSession.sessionToken,
        userId: prismaSession.userId,
      }
    },

    async deleteSession(sessionToken) {
      await prisma.session.delete({
        where: {
          sessionToken,
        },
      })
    },
  }
}
