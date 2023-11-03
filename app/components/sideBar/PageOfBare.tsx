'use client'

import React from 'react'
import SiBarElements from '@/app/bar/SiBarElements'
import Link from 'next/link'
import Image from 'next/image'
import img from '@/public/images/profile.jpeg'
import { User } from '@prisma/client'
import UpdateProfile from '../../settings/components/UpdateProfile'
import { AiOutlineSetting } from 'react-icons/ai'

interface useresd {
  user: User
}

export default function page({ user }: { user: any }) {
  const elements = SiBarElements()

  // console.log('user :>> ', session?.data?.user?.name)
  console.log('active :>> ', user)
  // console.log('nav :>> ', window.location.pathname)

  return (
    <div className="dark:bg-[#181818] dark:border-r-gray-100 dark:border-opacity-5  hidden lg:fixed lg:inset-y-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto lg:bg-white lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between items-center">
      <nav className="">
        {elements.map((element) => (
          <ul className="flex" onClick={element?.onClick} key={element.label}>
            <Link
              className={`text-gray-500 hover:text-black hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:bg-opacity-5 ${
                element.active && 'bg-gray-100'
              }`}
              href={element.link}
            >
              {/* <h5>{element.label}</h5> */}
              <div className="px-2 m-[19.5px] text-2xl dark:text-gray-200">
                <element.icon />
              </div>
            </Link>
          </ul>
        ))}
      </nav>
      <div className="flex flex-col gap-4 items-center">
        <Link href="/settings">
          <div className="cursor-pointer py-4 px-[26px] text-gray-600 dark:text-gray-400 hover:text-black hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:bg-opacity-5">
            <AiOutlineSetting size={24} />
          </div>
        </Link>
        <Link href="/settings/profile">
          <nav className="h-10 w-10 overflow-hidden rounded-full border-2 border-sky-800 cursor-pointer dark:border-white dark:hover:border-sky-500">
            <Image
              width={50}
              height={50}
              src={user?.image || img}
              alt="profile"
              className='bg-white dark:bg-[#181818]'
            />
          </nav>
        </Link>
      </div>
    </div>
  )
}
