import prisma from '@/app/lib/prisma'
import getUser from '@/app/action/getUser'

export const getConversations = async () => {
  const user = await getUser()
  try {
    if (!user?.id || !user.email) {
      return []
    }
    const conversations = await prisma.conversation.findMany({
      where: {
        userIds: {
          has: user.id,
        },
      },
      include: {
        users: true,
        messages: true,
      },
      orderBy: {
        lastMessageAt: 'desc',
      },
    })
    return conversations
  } catch (error) {
    return []
  }
}

export default getConversations
