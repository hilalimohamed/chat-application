'use server'

import * as z from 'zod'
import prisma from '@/lib/prisma'
import { ForgotPasswordSchema } from '@/schemas'
import { v4 as uuidv4 } from 'uuid'
import { sendToEmail } from '@/lib/password-mail'

export const forgotPassword = async (
  data: z.infer<typeof ForgotPasswordSchema>,
) => {
  try {
    // Validate the input data
    const validatedData = ForgotPasswordSchema.parse(data)

    //  If the data is invalid, return an error
    if (!validatedData) {
      return { error: 'Invalid input data' }
    }

    //  Destructure the validated data
    const { email } = validatedData

    // const lowerCaseEmail = email.toLowerCase()

    // Check to see if user not exists
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    })

    // If the user not exists, return an error
    if (!user) {
      return { error: 'User not found.' }
    }

    if (user.resetToken && user.resetTokenExpires) {
      const hasExpired = new Date(user.resetTokenExpires) < new Date()

      if (!hasExpired) {
        throw new Error(
          'The password reset link has already been sent. Please check your email.',
        )
      }
    }

    const resetToken = uuidv4()
    const resetTokenExpires = new Date().getTime() + 1000 * 60 * 60 * 1 // 1 hours

    await prisma.user.update({
      where: { email: email },
      data: { resetToken, resetTokenExpires: new Date(resetTokenExpires) },
    })

    await sendToEmail(email, resetToken)

    return { success: 'Email Verification for forgot password was sent' }
  } catch (error) {
    // Handle the error, specifically check for a 503 error
    console.error('Database error:', error)

    if ((error as { code: string }).code === 'ETIMEDOUT') {
      return {
        error: 'Unable to connect to the database. Please try again later.',
      }
    } else if ((error as { code: string }).code === '503') {
      return {
        error: 'Service temporarily unavailable. Please try again later.',
      }
    } else {
      return { error: 'An unexpected error occurred. Please try again later.' }
    }
  }
}
