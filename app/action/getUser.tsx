import prisma from '@/app/lib/prisma'
import getSession from './getSession'

export default async function getUser() {
  try {
    const session = await getSession()
    if (!session?.user?.email) {
      return null
    }
    const theUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    })
    if (!theUser) {
      return null
    }
    return theUser
  } catch (error: any) {
    return null
  }
}
