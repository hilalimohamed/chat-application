'use client'
import React from 'react'
// import SiBarElements from '@/app/bar/SiBarElements'
import Link from 'next/link'
import Image from 'next/image'
import img from '@/public/images/profile.jpeg'
import { AiOutlineSetting } from 'react-icons/ai'
import useLink from '@/app/hooks/useLink'
import clsx from 'clsx'

export default function page({ user }: { user: any }) {
  const elements = useLink()
  return (
    <div className="dark:bg-[#181818] fixed w-full py-3 justify-between bottom-0 z-40 flex items-center bg-white border-t-[1px] lg:hidden">
      {elements.slice(0, 2).map((element) => (
        <ul className="flex" onClick={element?.onClick} key={element.label}>
          <Link className="text-gray-500 hover:text-black" href={element.link}>
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
      {elements.slice(4).map((element) => (
        <ul className="flex" onClick={element?.onClick} key={element.label}>
          <Link
            className={clsx(
              'text-gray-500 border-2 h-10 w-10 overflow-hidden rounded-full cursor-pointer',
              element?.active && 'border-sky-800 ',
            )}
            href="/settings/profile"
          >
            <Image
              width={50}
              height={50}
              src={user?.image || img}
              alt="profile"
              className="bg-white dark:bg-[#181818]"
            />
          </Link>
        </ul>
      ))}
      {elements.slice(2, 4).map((element) => (
        <ul className="flex" onClick={element?.onClick} key={element.label}>
          <Link className="text-gray-500 hover:text-black" href={element.link}>
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
    </div>
  )
}
