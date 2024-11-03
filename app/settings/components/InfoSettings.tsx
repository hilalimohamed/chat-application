'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { BsLaptop } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { FiHelpCircle } from 'react-icons/fi'
import { BiSolidUser } from 'react-icons/bi'
import Link from 'next/link'

export default function InfoSettings() {
  const pathname = usePathname()
  const [isHidden, setIsHidden] = useState(false)

  const hideOnPaths = [
    '/settings/generale',
    '/settings/personalization',
    '/settings/help',
    '/settings/profile',
  ]

  useEffect(() => {
    setIsHidden(hideOnPaths.includes(pathname))
    console.log('Path hidden: ', hideOnPaths.includes(pathname))
  }, [pathname])

  return (
    <div
      className={`dark:bg-[#1F1F1F] lg:fixed bg-white inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-96 lg:h-screen h-screen overflow-y-auto border-r border-gray-200 dark:border-gray-700 dark:border-opacity-50 ${
        isHidden ? 'hidden lg:block' : 'block lg:block'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="text-2xl font-bold text-neutral-800 lg:py-5 lg:px-7 p-5 border-b bg-[#09090935] border-gray-200 dark:text-white lg:border-none">
          Settings
        </div>

        <div className="lg:pl-4 pl-4 py-5 flex flex-col-reverse gap-4 lg:flex lg:flex-col lg:justify-between lg:py-1 lg:flex-grow overflow-y-auto">
          <ul className="pr-2 flex flex-col gap-4">
            <Link href="/settings/generale">
              <li className="hover:bg-gray-200 px-3 py-2 cursor-pointer flex items-center gap-5 dark:hover:bg-opacity-5 dark:text-white">
                <BsLaptop size={19} />
                <div>Generale</div>
              </li>
            </Link>
            <Link href="/settings/personalization">
              <li className="hover:bg-gray-200 px-3 py-2 cursor-pointer flex gap-5 dark:hover:bg-opacity-5 dark:text-white">
                <AiFillEdit size={19} />
                Personalization
              </li>
            </Link>
            <Link href="/settings/help">
              <li className="hover:bg-gray-200 px-3 py-2 cursor-pointer flex gap-5 dark:hover:bg-opacity-5 dark:text-white">
                <FiHelpCircle size={19} />
                Help
              </li>
            </Link>
          </ul>
          <ul className="pr-2">
            <Link href="/settings/profile">
              <li className="hover:bg-gray-200 px-3 py-2 cursor-pointer flex gap-5 dark:hover:bg-opacity-5 dark:text-white">
                <BiSolidUser size={19} />
                Profile
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}
