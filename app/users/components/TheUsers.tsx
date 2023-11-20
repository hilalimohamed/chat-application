'use client'

import { User } from '@prisma/client'
import Image from 'next/image'
import img from '@/public/images/profile.jpeg'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

export default function theUsers({ users }: { users: User[] }) {
  const router = useRouter()
  const conversationClick = useCallback(
    async (data: User) => {
      try {
        const res = await axios.post('/api/conversations', { userId: data.id })
        // .then(() => {
        //   router.push(`/conversations`)
        // })
        console.log('resp >> ', res)
        if (res.status === 200) {
          router.push(`/conversations`)
        }
      } catch (error: any) {
        console.log('error >> ', error)
      }
    },
    [users, router],
  )
  console.log('the Users : ', users)
  // fixed
  // inset-y-0
  // pb-20
  // lg:pb-0
  // lg:left-20
  // lg:w-80
  // lg:block
  // overflow-y-auto
  // border-r
  // border-gray-200
  // block w-full left-0
  return (
    <div className="fixed lg:pb-0 lg:left-24 lg:w-[367px] overflow-y-scroll w-full left-0 inset-y-0 lg:block">
      <div className="fixed font-bold p-3 bg-[#181818] border-b border-gray-200 lg:border-none lg:bg-transparent w-full text-xl dark:text-white">
        Chats
      </div>
      <div className="mt-14">
        {users.map((user, index) => (
          <ul
            className="p-3 flex gap-5 items-center mb-2 hover:rounded hover:bg-gray-200 cursor-pointer dark:bg-opacity-20"
            key={index}
            onClick={() => conversationClick(user)}
          >
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-sky-800 cursor-pointer dark:border-white">
              <Image width={50} height={50} src={user?.image || img} alt="" />
            </div>
            <div className="dark:text-white">{user.name}</div>
          </ul>
        ))}
      </div>
    </div>
  )
}
