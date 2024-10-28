"use server";

import  prisma  from "@/lib/prisma";
import { ResetPasswordSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from "bcrypt";

export const resetPassword = async (
  data: z.infer<typeof ResetPasswordSchema>,
  resetToken: string
) => {
  try {
    // Validate input password structure with Zod
    const validatedData = ResetPasswordSchema.parse(data);

    if (!resetToken) {
      return { error: "Invalid reset token" };
    }

    //  Destructure the validated data
    const { password, passwordConfirmation } = validatedData;

    // Check if passwords match
    if (password !== passwordConfirmation) {
      return { error: "Passwords do not match" };
    }

    // Find user by token and check token validity
    const user = await prisma.user.findFirst({
      where: {
        resetToken: resetToken,
        // resetTokenExpires: { gte: new Date() }, // Ensure token has not expired
      },
    });

    // If user or valid token not found, throw an error
    if (!user) {
      return { error: "User not found" };
    }

    const hasExpired = new Date(user.resetTokenExpires as any) < new Date();

    if (hasExpired) {
      return { error: "Reset token has expired" };
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user password and clear reset token fields
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null, // Clear token
        resetTokenExpires: null, // Clear token expiration
      },
    });

    return { success: "Password has been reset successfully!" };
  } catch (error) {
    return { error: "An unexpected error occurred. Please try again later." };
  }
};
