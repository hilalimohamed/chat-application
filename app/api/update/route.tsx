import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function PUT(req: NextRequest) {
  try {
    const { id, name, email, password } = await req.json()
    const user = await prisma.user.update({
      where: { id },
      data: {
        name,
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

// if (!name || !email || !password) {
//   return NextResponse.json({ message: 'invalid data' }, { status: 402 })
// }
// const existingEmail = await prisma.user.findUnique({
//   where: { email },
// })
// if (existingEmail) {
//   return NextResponse.json(
//     { message: 'email already exist' },
//     { status: 422 },
//   )
// }
// const hashedPassword = await bcrypt.hash(password, 10)
// const user = await prisma.user.create({
//   data: {
//     name,
//     email,
//     password: hashedPassword,
//   },
// })
