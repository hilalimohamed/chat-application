'use client'
import Image from 'next/image'
import img from '@/public/images/groupeChat.jpg'
import img1 from '@/public/images/groupeChatIMG.jpg'
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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
      .max(17, 'Username must be at most 17 characters')
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
    path: ['confirmPassword'],
  })
  .optional()

export default function page() {
  // const [values, setvalues] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   error: '',
  //   // confirmPassword: '',

  // })
  // const handelChange = (e: any) => {
  //   const name = e.target.name
  //   setvalues({ ...values, [name]: e.target.value })
  // }

  // const handeSubmit = async (e: any) => {
  //   e.preventDefault()
  //   try {
  //     const response = await axios.post('/api/register', {
  //       name: values.username,
  //       email: values.email,
  //       password: values.password,
  //     })
  //     // console.log(response.data.message)
  //   } catch (error: any) {
  //     console.log('signup failed  ', error.response.data.message)
  //     setvalues({ ...values, error: error.response.data.message })
  //   }
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  // const onSubmit = (data: FormData) => {
  //   console.log(data)
  // }
  const onSubmit = async (data: FormData) => {
    try {
      // Validate the form data against the Zod schema
      const validatedData = schema.parse(data)

      // If validation succeeds, you can proceed with submitting the data
      console.log('Valid form data:', validatedData)
      // Call your API to submit the data here
      const response = await axios.post('/api/register', {
        name: data.username,
        email: data.email,
        password: data.password,
      })
      console.log(response.data)
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        console.error('Validation error:', error)
        // console.log('signup failed  ', error.response.data.message)
      }
    }
  }

  return (
    <div className="flex place-items-center justify-center h-screen">
      <div className="border-2 w-[340px] h-[471px] shadow-2xl border-r-sky-500 border-sky-500">
        <Image src={img1} alt="" width={360} height={544} priority={true} />
        <h1 className="text-2xl text-center w-full p-4 text-sky-500 font-mono font-bold cursor-default">
          WELCOME TO CHAT
        </h1>
      </div>
      <div className="shadow-2xl p-6 w-1/4 border-2 border-b-sky-500">
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
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit(onSubmit)}
          //  onSubmit={handeSubmit}
        >
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
            // onChange={handelChange}
            className="border-b-2 text-sm focus:placeholder:text-sky-300 focus:border-sky-500 outline-none placeholder:text-sm placeholder:text-sky-400 pl-2"
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
            // onChange={handelChange}
            className="border-b-2 text-sm focus:placeholder:text-sky-300 focus:border-sky-500 outline-none placeholder:text-sm placeholder:text-sky-400 pl-2"
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
            // onChange={handelChange}
            className="border-b-2 text-sm placeholder:text-sm focus:placeholder:text-sky-300 outline-none focus:border-sky-500 placeholder:text-sky-400 pl-2"
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
            // onChange={handelChange}
            className="border-b-2 text-sm placeholder:text-sm focus:placeholder:text-sky-300 outline-none focus:border-sky-500 placeholder:text-sky-400 pl-2"
          />
          {errors.confirmpassword && (
            <span
              style={{ fontSize: '11px' }}
              className="text-red-500 -mt-4 -mb-3"
            >
              {errors.confirmpassword.message}
            </span>
          )}
          {/* {values.error && <div className="bg-red-400">{values.error}</div>} */}
          <button className="bg-sky-500 py-1 mt-2 text-white font-semibold">
            Register
          </button>
        </form>
        <div className=" mt-8">
          <h6 className="text-xs text-gray-500 text-right">
            Already have an account ?{' '}
            <Link
              href={'/'}
              className="underline text-xs text-blue-800 hover:text-blue-500 font-semibold"
            >
              login
            </Link>
          </h6>
        </div>
      </div>
    </div>
  )
}
