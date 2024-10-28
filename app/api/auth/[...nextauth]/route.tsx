import NextAuth from 'next-auth/next'

import { DefaultSession, NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '@/lib/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { text } from 'stream/consumers'
import bcrypt from 'bcrypt'
import { getUserById } from '@/data/user'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? '',
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error('invalid login')
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        })
        if (!user) {
          throw new Error("this user doesn't found")
        }
        const isCorectPassword = await bcrypt.compare(
          credentials.password,
          user.password,
        )
        if (!isCorectPassword) {
          throw new Error('password not correct')
        }
        return user
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }: { user: any; account: any }) {
      if (account?.provider !== 'credentials') return true

      const existingUser = await getUserById(user.id ?? '')
      if (!existingUser?.emailVerified) return false

      return true
    },
    async session({ token, session }: { token: any; session: DefaultSession }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          isOAuth: token.isOauth,
        },
      }
    },
    async jwt({ token }: { token: any }) {
      if (!token.sub) return token
      const existingUser = await getUserById(token.sub)

      if (existingUser) {
        token.name = existingUser.name
        token.email = existingUser.email
      }
      return token
    },
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
