import prisma from '@/lib/prisma'

const getLastMessages = async (conversationId: string) => {
  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId: conversationId,
      },
    })

    return messages
  } catch (error: any) {
    return []
  }
}
export default getLastMessages
