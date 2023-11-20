import React from 'react'
import { BsLaptop } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { FiHelpCircle } from 'react-icons/fi'
import { BiSolidUser } from 'react-icons/bi'
import Link from 'next/link'

export default function UpdateProfile() {
  return (
    // <div className="fixed left-0 lg:pl-28 h-full bg-yellow-200">
    <div className="dark:bg-[#1F1F1F] fixed bg-white inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-96 lg:h-full lg:block overflow-y-auto border-r border-gray-200 dark:border-gray-700 dark:border-opacity-50 block w-full left-0">
      <div className="lg:pl-2 lg:flex lg:flex-col lg:justify-between h-full lg:py-4">
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
    // </div>
  )
}
