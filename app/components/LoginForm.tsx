'use client'

import Image from 'next/image'
import React from 'react'
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
import { useSession, signIn, signOut } from 'next-auth/react'

export default function LoginForm() {
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
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Email"
            className="border-b-2 text-sm focus:placeholder:text-sky-300 focus:border-sky-500 outline-none placeholder:text-sm placeholder:text-sky-400 pl-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-b-2 text-sm placeholder:text-sm focus:placeholder:text-sky-300 outline-none focus:border-sky-500 placeholder:text-sky-400 pl-2"
          />
          <button className="bg-sky-500 py-1 mt-2 text-white font-semibold">
            Log In
          </button>
        </form>
        <div className="mt-7 mb-6 relative">
          <div style={{ height: '2px' }} className="bg-gray-200"></div>
          <h3 className="absolute -top-2 left-1/3 px-1 bg-white text-gray-500 text-sm">
            Or sign in with
          </h3>
        </div>
        <div className="flex justify-between">
          <button className="flex items-center bg-blue-900 text-white py-1 px-2">
            <FaFacebookF className="" />
            <span className="text-xs ml-1 font-semibold">Facebook</span>
          </button>
          <button className="flex items-center bg-black py-1 px-2 mx-2">
            <FaSquareGithub className="text-white text-xl" />
            <span className="text-xs text-white ml-1 font-semibold">
              Github
            </span>
          </button>
          <button
            onClick={() => signIn()}
            className="flex items-center bg-red-500 py-1 px-3"
          >
            <FcGoogle />
            <span className="text-xs text-white ml-1 font-semibold">
              Google
            </span>
          </button>
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
