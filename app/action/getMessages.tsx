import prisma from '@/lib/prisma'
// import { subDays, startOfDay, endOfDay } from 'date-fns'

const getMessages = async (conversationId: string) => {
  try {
    // const today = new Date()
    // const yesterday = subDays(today, 1)
    const messages = await prisma.message.findMany({
      where: {
        conversationId: conversationId,
      },
      include: {
        user: true,
      },
      // skip: 10,
      // take: 10,
      orderBy: {
        createdAt: 'asc',
      },
    })

    return messages
  } catch (error: any) {
    return []
  }
}
export default getMessages
