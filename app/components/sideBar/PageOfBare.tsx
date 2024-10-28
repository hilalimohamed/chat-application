'use client'

import React from 'react'
import SiBarElements from '@/app/bar/SiBarElements'
import Link from 'next/link'
import Image from 'next/image'
import img from '@/public/images/profile.jpeg'
import { User } from '@prisma/client'
import UpdateProfile from '../../settings/components/UpdateProfile'
import { AiOutlineSetting } from 'react-icons/ai'
import useLink from '@/app/hooks/useLink'
import clsx from 'clsx'

interface useresd {
  user: User
}

export default function Page({ user }: { user: any }) {
  const elements = useLink()

  return (
    <div className="dark:bg-[#181818] dark:border-r-gray-100 dark:border-opacity-5  hidden lg:fixed lg:inset-y-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto lg:bg-white lg:border-r-[1px] lg:flex lg:flex-col justify-between items-center">
      <nav className="">
        {elements.slice(0, 3).map((element) => (
          <ul className="flex" onClick={element?.onClick} key={element.label}>
            <Link
              className={clsx(
                'text-gray-500 hover:text-black hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:bg-opacity-5',
                element?.active && 'bg-gray-200 bg-opacity-5',
              )}
              // className={`text-gray-500 hover:text-black hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:bg-opacity-5 ${
              //   element.active && 'bg-gray-100'
              // }`}
              href={element.link}
            >
              <div className="px-2 m-[19.5px] text-2xl dark:text-gray-200">
                <element.icon />
              </div>
            </Link>
          </ul>
        ))}
      </nav>
      <nav className="flex flex-col items-center">
        {elements.slice(3, 4).map((element) => (
          <ul className="flex" onClick={element?.onClick} key={element.label}>
            <Link
              className={clsx(
                'text-gray-500 hover:text-black hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:bg-opacity-5',
                element?.active && 'bg-gray-200 bg-opacity-5',
              )}
              href={element.link}
            >
              <div className="px-2 m-[19.5px] text-2xl dark:text-gray-200">
                <element.icon className="hover:rotate-180 transition hover:text-sky-500 duration-1000" />
              </div>
            </Link>
          </ul>
        ))}
        {/* 
          <div className="cursor-pointer py-4 px-[26px] text-gray-600 dark:text-gray-400 ">
          className="hover:rotate-180 transition hover:text-sky-500 duration-1000"
        */}
        {elements.slice(4).map((element) => (
          <ul className="flex" onClick={element?.onClick} key={element.label}>
            <Link
              className={clsx(
                'text-gray-500 hover:text-black px-[19.5px] py-3 hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:bg-opacity-5',
                element?.active && 'bg-gray-200 bg-opacity-5',
              )}
              href="/settings/profile"
            >
              <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-sky-800 cursor-pointer dark:border-white dark:hover:border-sky-500">
                <Image
                  width={50}
                  height={50}
                  src={user?.image || img}
                  alt="profile"
                  className="bg-white dark:bg-[#181818]"
                />
              </div>
            </Link>
          </ul>
        ))}
      </nav>
    </div>
  )
}
