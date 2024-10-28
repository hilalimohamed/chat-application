"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ResetPasswordSchema } from "@/schemas";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import CardWrapper from "../auth/card-wrapper";
import { FormSuccess } from "../auth/form-success";
import { FormError } from "../auth/form-error";
import { resetPassword } from "@/app/action/reset-password-verification";

export function ResetPasswordForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const searchParams = useSearchParams();
  const resetToken = searchParams.get("resetToken");

  const form = useForm<z.infer<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: "",
      passwordConfirmation: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof ResetPasswordSchema>) => {
    setLoading(true);
    if (!resetToken) {
      setError("Invalid or missing reset token.");
      setLoading(false);
      return;
    }

    try {
      const res = await resetPassword(data, resetToken);
      if (res.error) {
        setError(res.error);
      } else if (res.success) {
        setSuccess(res.success);
      }
    } catch (error) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CardWrapper
      headerLabel="Creation of new password"
      title="Reset Password"
      backButtonHref="/"
      backButtonLabel="Back to login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="******" type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirmation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="******" type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormSuccess message={success} />
          <FormError message={error} />
          <Button type="submit" disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}
