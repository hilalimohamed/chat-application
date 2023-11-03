import prisma from '@/app/lib/prisma'

const getMessages = async (conversationId: string) => {
  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId: conversationId,
      },
      include: {
        user: true,
      },
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
