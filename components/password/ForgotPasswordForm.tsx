'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ForgotPasswordSchema } from '@/schemas'
import axios from 'axios'
import { z } from 'zod'
import { forgotPassword } from '@/app/action/request-password-reset'
import { useState } from 'react'
import CardWrapper from '../auth/card-wrapper'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { FormSuccess } from '../auth/form-success'
import { FormError } from '../auth/form-error'
import { Button } from '../ui/button'

export const ForgotPasswordForm = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = async (data: z.infer<typeof ForgotPasswordSchema>) => {
    setLoading(true)
    forgotPassword(data).then((res) => {
      if (res.error) {
        setError(res.error)
        setLoading(false)
      }
      if (res.success) {
        setSuccess(res.success)
        setLoading(false)
      }
    })
  }

  return (
    <CardWrapper
      headerLabel="Enter your email to reset your password."
      title="Forgot Password"
      backButtonHref="/"
      backButtonLabel="Back to login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="example@email.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormSuccess message={success} />
          <FormError message={error} />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Loading...' : 'Send password reset link'}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
