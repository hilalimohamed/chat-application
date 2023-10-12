'use client'

import React from 'react'
import SiBarElements from '@/app/bar/SiBarElements'
import Link from 'next/link'
import Image from 'next/image'
import img from '@/public/images/profile.jpeg'
import { User } from '@prisma/client'

interface useresd {
  user: User
}

export default function page({ user }: { user: any }) {
  const elements = SiBarElements()

  // console.log('user :>> ', session?.data?.user?.name)
  console.log('active :>> ', user)
  // console.log('nav :>> ', window.location.pathname)

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto lg:bg-white lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between items-center">
      <nav className="">
        {elements.map((element) => (
          <ul className="flex" onClick={element?.onClick} key={element.label}>
            <Link
              className={`text-gray-500 hover:text-black hover:bg-gray-100 ${
                element.active && 'bg-gray-100'
              }`}
              href={element.link}
            >
              {/* <h5>{element.label}</h5> */}
              <div className="px-2 m-[19.5px] text-2xl">
                <element.icon />
              </div>
            </Link>
          </ul>
        ))}
      </nav>
      <nav className="h-10 w-10 overflow-hidden rounded-full border-2 border-sky-800 cursor-pointer">
        <Image width={50} height={50} src={user?.image || img} alt="" />
      </nav>
    </div>
  )
}
