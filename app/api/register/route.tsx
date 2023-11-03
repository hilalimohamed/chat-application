import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import prisma from '@/app/lib/prisma'
// import { signIn } from 'next-auth/react'

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json()
    if (!name || !email || !password) {
      return NextResponse.json({ message: 'invalid data' }, { status: 402 })
    }
    const existingEmail = await prisma.user.findUnique({
      where: { email },
    })
    if (existingEmail) {
      return NextResponse.json(
        { message: 'email already exist' },
        { status: 422 },
      )
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })
    // After successfully creating the user,i well sign them in using NextAuth.js
    // await signIn('credentials', {
    //   username: email, // Use the email as the username for credentials-based authentication
    //   password, // Use the provided password
    //   callbackUrl: '/dashboard', // Redirect URL after successful sign-in
    // })
    return NextResponse.json(
      { message: 'user created', data: user },
      { status: 201 },
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'an error occurred' }, { status: 500 })
  }
}
