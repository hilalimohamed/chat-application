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

export default function page({ user }: { user: any }) {
  const elements = useLink()
  return (
    <div className="dark:bg-[#181818] fixed w-full py-3 justify-between bottom-0 z-40 flex items-center bg-white border-t-[1px] lg:hidden">
      {elements.map((element) => (
        <ul className="flex" onClick={element?.onClick} key={element.label}>
          <Link
            className="text-gray-500 hover:text-black"
            href={element.link}
          >
            <div
              className={clsx(
                'px-5 text-2xl',
                element.active && 'text-sky-400 scale-125',
              )}
            >
              <element.icon />
            </div>
          </Link>
        </ul>
      ))}
      <Link href="/settings">
        <div className="cursor-pointer px-5 text-gray-600 dark:text-gray-400">
          <AiOutlineSetting
            className="hover:rotate-180 transition translate"
            size={24}
          />
        </div>
      </Link>
      <Link href="/settings/profile">
        <nav className="h-10 w-10 overflow-hidden rounded-full mr-3 border-2 border-sky-800 cursor-pointer dark:border-white dark:hover:border-sky-500">
          <Image
            width={50}
            height={50}
            src={user?.image || img}
            alt="profile"
            className="bg-white dark:bg-[#181818]"
          />
        </nav>
      </Link>
    </div>
  )
}
