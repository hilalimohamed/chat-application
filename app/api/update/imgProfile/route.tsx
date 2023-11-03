import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/app/lib/prisma'

export async function PUT(req: NextRequest) {
  try {
    const { id, image } = await req.json()
    const user = await prisma.user.update({
      where: { id },
      data: {
        image,
        updatedAt: new Date(),
      },
    })
    return NextResponse.json(
      { message: 'user updated', data: user },
      { status: 201 },
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'an error occurred' }, { status: 500 })
  }
}
