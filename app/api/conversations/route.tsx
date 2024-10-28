import { NextRequest, NextResponse } from 'next/server'
import getUser from '@/app/action/getUser'
import prisma from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const user = await getUser()
    const { userId } = await req.json()

    const existingConversations = await prisma.conversation.findMany({
      where: {
        // when using mongodb
        // OR: [
        //   {
        //     userIds: {
        //       equals: [user?.id, userId],
        //     },
        //   },
        //   {
        //     userIds: {
        //       equals: [userId, user?.id],
        //     },
        //   },
        // ],

        // when using PostgreSQL
        AND: [
          {
            users: {
              some: {
                id: user?.id,
              },
            },
          },
          {
            users: {
              some: {
                id: userId,
              },
            },
          },
        ],
      },
    })

    const singleConversation = existingConversations[0]

    if (singleConversation) {
      return NextResponse.json(singleConversation)
    }

    const newConversation = await prisma.conversation.create({
      data: {
        users: {
          connect: [
            {
              id: user?.id,
            },
            {
              id: userId,
            },
          ],
        },
      },
      include: {
        users: true,
      },
    })
    return NextResponse.json(newConversation)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'there is error' }, { status: 500 })
  }
}
