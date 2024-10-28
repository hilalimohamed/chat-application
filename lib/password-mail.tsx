import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const domain = 'http://localhost:3000'

export const sendToEmail = async (email: string, resetToken: string) => {
  const confirmationLink = `${domain}/reset-password?resetToken=${resetToken}`

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'mhilaliper@gmail.com',
    subject: 'Reset your password',
    html: `      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #333; text-align: center;">Password Reset Request</h2>
        <p style="color: #555;">Hello,</p>
        <p style="color: #555;">
          We received a request to reset the password for your account. If you requested this change, please click the button below to reset your password:
        </p>
        <div style="text-align: center; margin: 20px 0;">
          <a href="${confirmationLink}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; display: inline-block; font-size: 16px;">
            Reset Password
          </a>
        </div>
        <p style="color: #555;">
          If you did not request a password reset, please ignore this email, and your password will remain the same.
        </p>
        <p style="color: #555;">Best regards,<br>The Team</p>
      </div>`,
  })
}
