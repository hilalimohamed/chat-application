import getUser from '@/app/action/getUser'
import prisma from '@/app/lib/prisma'
import { pusherServer } from '@/app/lib/pusher'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const user = await getUser()
    const { text, image, conversationId } = await req.json()

    if (!user?.id || !user?.email) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const createNewMessage = await prisma.message.create({
      data: {
        text,
        image,
        conversation: {
          connect: { id: conversationId },
        },
        user: {
          connect: { id: user.id },
        },
      },
      include: {
        user: true,
      },
    })

    const updatedConversation = await prisma.conversation.update({
      where: {
        id: conversationId,
      },
      data: {
        lastMessageAt: new Date(),
        messages: {
          connect: {
            id: createNewMessage.id,
          },
        },
      },
      include: {
        users: true,
        messages: true,
      },
    })

    await pusherServer.trigger(conversationId, 'new-message', createNewMessage)

    const lastMessage =
      updatedConversation.messages[updatedConversation.messages.length - 1]
    //  {
    //   text: createNewMessage.text,
    //   createdAt: createNewMessage.createdAt,
    //   user: {
    //     id: createNewMessage.user.id,
    //     name: createNewMessage.user.name,
    //   },
    // }
    updatedConversation.users.map((user) => {
      pusherServer.trigger(user.email!, 'last-message', {
        id: conversationId,
        messages: [lastMessage],
      })
    })

    return NextResponse.json(createNewMessage)
  } catch (error) {
    return NextResponse.json({ message: 'there is error' }, { status: 500 })
  }
}
