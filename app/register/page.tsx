'use client'
import Image from 'next/image'
import img from '@/public/images/groupeChat.jpg'
import img1 from '@/public/images/groupeChatIMG.jpg'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { z, ZodError } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

interface FormData {
  username: string
  email: string
  password: string
  confirmpassword: string
}
const schema = z
  .object({
    username: z
      .string()
      .min(3, 'Username must be at least 3 characters')
      .max(25, 'Username must be at most 17 characters')
      .regex(/^[A-Za-z]+$/i, 'Username must contain only letters')
      .optional(),
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
    confirmpassword: z.string(),
  })
  .refine((value) => value.password === value.confirmpassword, {
    message: 'Passwords do not match',
    path: ['confirmpassword'],
  })

export default function page() {
  const { data: session } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState('Register')

  useEffect(() => {
    // Check if the user is authenticated
    if (session?.user) {
      // Redirect to the desired path for authenticated users
      router.push('/conversations')
    }
  }, [session, router])

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      // Validate the form data against the Zod schema
      const validatedData = schema.parse(data)

      // If validation succeeds, you can proceed with submitting the data
      console.log('Valid form data:', validatedData)
      setLoading('loading...')
      const response = await axios
        .post('/api/register', {
          name: data.username,
          email: data.email,
          password: data.password,
        })
        .then((res) => {
          if (res.data.message === 'email already exist') {
            toast.success('User created!')
          }
          if (
            res.data.message ===
            'User was Created and Email Verification was sent'
          ) {
            toast.success('User was Created, Email Verification was sent')
            console.log(res.data.message)
            router.push('/')
          }
        })
        // .catch(() => toast.error('Something went wrong!'))
        .finally(() => {
          setLoading('Register')
        })
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        console.error('Validation errors:', error.errors)
        toast.error('Please correct the form errors.')
      } else {
        console.error('An error occurred:', error.response.data.message)
        if (error.response.data.message === 'email already existe') {
          toast.error('this email already existe')
        } else if (error.response.data.message === 'an error occurred') {
          toast.error('Something went wrong during registration.')
        } else {
          toast.error('Something went wrong during registration.')
        }
      }
    }
  }

  return (
    <div className="flex place-items-center justify-center h-screen dark:bg-[#1F1F1F]">
      <div className="hidden md:block lg:block  border-2 w-[340px] h-[471px] shadow-2xl border-r-sky-500 border-sky-500">
        <Image src={img1} alt="" width={360} height={544} priority={true} />
        <h1 className="text-2xl text-center w-full p-[30px] text-sky-500 font-mono font-bold cursor-default dark:bg-white">
          WELCOME TO CHAT
        </h1>
      </div>
      <div className="shadow-2xl p-6 px-9 w-[350px] h-[471px] border-2 md:border-l-0 lg:border-l-0 border-sky-500 dark:bg-[#282828]">
        <h1 className="text-sky-500 font-bold text-center mb-2 text-xl">
          Register
        </h1>
        <Image
          src={img}
          alt=""
          width={160}
          height={140}
          priority={true}
          className="mx-auto my-auto mb-2"
        />
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="User Name"
            {...register(
              'username',
              // , {
              //   required: 'This field is required',
              //   minLength: {
              //     value: 3,
              //     message: 'Username must be at least 3 characters',
              //   },
              //   maxLength: {
              //     value: 17,
              //     message: 'Username must be at most 17 characters',
              //   },
              //   pattern: {
              //     value: /^[A-Za-z]+$/i,
              //     message: 'Username must contain only letters',
              //   },
              // }
            )}
            className="border-b-2 text-sm focus:placeholder:text-sky-300 focus:border-sky-500 outline-none placeholder:text-sm placeholder:text-sky-400 pl-2 dark:bg-[#282828] dark:border-gray-500 dark:text-gray-300"
          />
          {errors.username && (
            <span
              style={{ fontSize: '11px' }}
              className="text-red-500 -mt-4 -mb-3"
            >
              {errors.username.message}
            </span>
          )}
          <input
            type="text"
            placeholder="Email"
            {...register(
              'email',
              // {
              //   required: 'This field is required',
              //   pattern: {
              //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              //     message: 'Invalid email address',
              //   },
              // }
            )}
            className="border-b-2 text-sm focus:placeholder:text-sky-300 focus:border-sky-500 outline-none placeholder:text-sm placeholder:text-sky-400 pl-2 dark:bg-[#282828] dark:border-gray-500 dark:text-gray-300"
          />
          {errors.email && (
            <span
              style={{ fontSize: '11px' }}
              className="text-red-500 -mt-4 -mb-3"
            >
              {errors.email.message}
            </span>
          )}
          <input
            type="password"
            placeholder="Password"
            {...register(
              'password',
              // {
              //   required: 'This field is required',
              //   minLength: {
              //     value: 8,
              //     message: 'Password must be at least 8 characters',
              //   },
              //   maxLength: {
              //     value: 32,
              //     message: 'Password must not exceed 32 characters',
              //   },
              //   pattern: {
              //     value:
              //       /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/, // Adjust the pattern as needed
              //     message:
              //       'Password must include at least one lowercase letter, one uppercase letter, one digit, and one special character',
              //   },
              // }
            )}
            className="border-b-2 text-sm placeholder:text-sm focus:placeholder:text-sky-300 outline-none focus:border-sky-500 placeholder:text-sky-400 pl-2 dark:bg-[#282828] dark:border-gray-500 dark:text-gray-300"
          />
          {errors.password && (
            <span
              style={{ fontSize: '11px' }}
              className="text-red-500 -mt-4 -mb-3"
            >
              {errors.password.message}
            </span>
          )}
          <input
            type="password"
            placeholder="Confirm Password"
            {...register(
              'confirmpassword',
              // {
              //   required: 'This field is required',
              //   validate: (value) =>
              //     value === getValues('password') || 'Passwords do not match',
              // }
            )}
            className="border-b-2 text-sm placeholder:text-sm focus:placeholder:text-sky-300 outline-none focus:border-sky-500 placeholder:text-sky-400 pl-2 dark:bg-[#282828] dark:border-gray-500 dark:text-gray-300"
          />
          {errors.confirmpassword && (
            <span
              style={{ fontSize: '11px' }}
              className="text-red-500 -mt-4 -mb-3"
            >
              {errors.confirmpassword.message}
            </span>
          )}
          {loading === 'Register' ? (
            <button className="bg-sky-500 py-1 mt-2 text-white font-semibold">
              Register
            </button>
          ) : loading === 'loading...' ? (
            <button
              className="bg-sky-300 py-1 mt-2 text-white font-semibold cursor-wait"
              disabled
            >
              <div
                className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              ></div>
            </button>
          ) : (
            <button className="bg-sky-500 py-1 mt-2 text-white font-semibold">
              Register
            </button>
          )}
        </form>
        <div className=" mt-8">
          <h6 className="text-xs text-gray-500 text-right">
            Already have an account ?{' '}
            <Link
              href={'/'}
              className="underline text-xs text-blue-800 hover:text-blue-500 font-semibold dark:text-gray-100 dark:hover:text-gray-400"
            >
              login
            </Link>
          </h6>
        </div>
      </div>
    </div>
  )
}
