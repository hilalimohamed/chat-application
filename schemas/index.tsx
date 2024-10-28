import * as z from 'zod'

// Forgot Password Schema - for requesting a reset link
export const ForgotPasswordSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
})

// Reset Password Schema - for setting a new password
export const ResetPasswordSchema = z
  .object({
    password: z.string().min(6, {
      message: 'Password must be at least 6 characters long.',
    }),
    passwordConfirmation: z.string().min(6, {
      message: 'Password must be at least 6 characters long.',
    }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match.',
    path: ['passwordConfirmation'],
  })
