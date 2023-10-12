'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import img from '@/public/images/groupeChat.jpg'
import img1 from '@/public/images/save.jpg'
import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { FaSquareGithub } from 'react-icons/fa6'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSession, signIn } from 'next-auth/react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

interface FormData {
  email: string
  password: string
}
const schema = z.object({
  email: z.string().email('Invalid email address').optional(),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password must not exceed 32 characters')
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Password must include at least one lowercase letter, one uppercase letter, one digit, and one special character',
    )
    .optional(),
})

export default function LoginForm() {
  const session = useSession()
  const [loading, setLoading] = useState('Log In')
  const [loadingSocial, setLoadingSocial] = useState('nothing')
  const router = useRouter()

  useEffect(() => {
    if (session?.status === 'authenticated') {
      console.log('authenticated')
      router.push('users')
    } else {
      console.log('unauthenticated')
    }
  }, [session?.status, router])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    try {
      const validatedData = schema.parse(data)
      const { email, password } = validatedData
      console.log('Valid form data:', validatedData)
      setLoading('loading...')
      signIn('credentials', {
        email,
        password,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error('Invalid login!')
          }
          if (callback?.ok) {
            toast.success('Logged in!')
          }
        })
        .finally(() => {
          setLoading('Log In')
        })
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error('Validation error:', error)
        toast.error('Invalid input data!')
        setLoading('Log In')
      } else {
        console.error('Error:', error)
        toast.error('Something went wrong!')
        setLoading('Log In')
      }
    }
  }

  const socailMedia = (media: string) => {
    setLoadingSocial(media)
    signIn(media)
      .then((callback) => {
        if (callback?.error) {
          toast.error('Invalid login!')
        }
        if (callback?.ok) {
          toast.success('Logged in!')
        }
      })
      .finally(() => {
        setLoadingSocial('nothing')
      })
  }

  return (
    <div className="flex place-items-center justify-center h-screen">
      <div className="border-2 w-[340px] h-[471px] shadow-2xl border-r-sky-500 border-sky-500">
        <Image src={img1} alt="" width={360} height={544} priority={true} />
        <h1 className="text-2xl text-center w-full bg-sky-500 p-12 border-b-4 text-white font-mono border-sky-500 font-bold cursor-default">
          WELCOME TO CHAT
        </h1>
      </div>
      <div className="shadow-2xl p-9 border-2 border-b-sky-500">
        <h1 className="text-sky-500 font-bold text-center mb-2 text-xl">
          Log In
        </h1>
        <Image
          src={img}
          alt=""
          width={140}
          height={130}
          priority={true}
          className="mx-auto my-auto mb-2"
        />
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Email"
            {...register('email')}
            className="border-b-2 text-sm focus:placeholder:text-sky-300 focus:border-sky-500 outline-none placeholder:text-sm placeholder:text-sky-400 pl-2"
          />
          {errors.email && (
            <span
              style={{ fontSize: '11px' }}
              className="text-red-500 -mt-2 -mb-2"
            >
              {errors.email.message}
            </span>
          )}
          <input
            type="password"
            placeholder="Password"
            {...register('password')}
            className="border-b-2 text-sm placeholder:text-sm focus:placeholder:text-sky-300 outline-none focus:border-sky-500 placeholder:text-sky-400 pl-2"
          />
          {errors.password && (
            <span
              style={{ fontSize: '11px' }}
              className="text-red-500 -mt-2 -mb-2 max-w-[240px]"
            >
              {errors.password.message}
            </span>
          )}
          {loading === 'Log In' ? (
            <button className="bg-sky-500 py-1 mt-2 text-white font-semibold">
              Log In
            </button>
          ) : loading === 'loading...' ? (
            <button
              className="bg-sky-300 py-1 mt-2 text-white font-semibold"
              disabled
            >
              <div
                className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              ></div>
            </button>
          ) : (
            <button className="bg-sky-500 py-1 mt-2 text-white font-semibold">
              Log In
            </button>
          )}
        </form>
        <div className="mt-7 mb-6 relative">
          <div style={{ height: '2px' }} className="bg-gray-200"></div>
          <h3 className="absolute -top-2 left-1/3 px-1 bg-white text-gray-500 text-sm">
            Or sign in with
          </h3>
        </div>
        <div className="flex justify-between">
          <button className="flex items-center bg-blue-900 text-white py-1 px-2 cursor-no-drop">
            <FaFacebookF className="" />
            <span className="text-xs ml-1 font-semibold">Facebook</span>
          </button>
          {loadingSocial === 'github' ? (
            <button
              className="flex items-center bg-gray-800 py-1 px-2 mx-2"
              disabled
            >
              <div
                className="text-white p-[6px] inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              ></div>
              <span className="text-xs text-white ml-1 font-semibold">
                Github
              </span>
            </button>
          ) : (
            <button
              onClick={() => socailMedia('github')}
              className="flex items-center bg-black py-1 px-2 mx-2"
            >
              <FaSquareGithub className="text-white text-xl" />
              <span className="text-xs text-white ml-1 font-semibold">
                Github
              </span>
            </button>
          )}
          {loadingSocial === 'google' ? (
            <button className="flex items-center bg-red-400 py-1 px-3" disabled>
              <div
                className="text-white p-[5px] inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              ></div>
              <span className="text-xs text-white ml-1 font-semibold">
                Google
              </span>
            </button>
          ) : (
            <button
              onClick={() => socailMedia('google')}
              className="flex items-center bg-red-500 py-1 px-3"
            >
              <FcGoogle />
              <span className="text-xs text-white ml-1 font-semibold">
                Google
              </span>
            </button>
          )}
        </div>
        <div className=" justify-between mt-5">
          <button className="text-blue-700 text-xs hover:underline hover:text-blue-500 font-semibold mb-2">
            forgot password
          </button>
          <h6 className="text-xs text-gray-500 text-right">
            don't have an account ?{' '}
            <Link
              href={'/register'}
              className="underline text-xs text-blue-800 hover:text-blue-500 font-semibold"
            >
              sign up
            </Link>
          </h6>
        </div>
      </div>
    </div>
  )
}
