'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import img from '@/public/images/profile.jpeg'
import { Conversation } from '@prisma/client'
import { useRouter } from 'next/navigation'
import useConvUser from '@/app/hooks/useConvUser'
import { IoImageOutline } from 'react-icons/io5'
import { format } from 'util'
import { isValid } from 'date-fns'
import { enUS } from 'date-fns/locale'
import LastMessageInfo from './LastMessageInfo'

export default function TheConversation({
  conversations,
}: {
  conversations: any
}) {
  const router = useRouter()
  const convUser = useConvUser(conversations[0])
  // console.log('conve >>  ', conversations, '  howa :   ', convUser[0])
  console.log('conveomess >>  ', conversations)
  const toConversasionId = (convertaionId: string) => {
    router.push(`/conversations/${convertaionId}`)
  }

  return (
    <div className="fixed left-0 lg:w-[462px] lg:pl-24 overflow-y-auto inset-y-0 lg:block scrollbar-thumb-gray-600 scrollbar-thin dark:scrollbar-thumb-[#2f2f2f]">
      <div className="text-2xl font-bold text-neutral-800 p-3 dark:text-white">
        Messages
      </div>
      <div className="">
        {conversations.map((conversation: any) => (
          <ul
            onClick={() => toConversasionId(conversation.id)}
            className="p-3 flex justify-between items-center mb-2 hover:rounded hover:bg-gray-200 cursor-pointer dark:bg-opacity-20"
            key={conversation.id}
          >
            <div className="flex items-center gap-5">
              <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-sky-800 cursor-pointer dark:border-white">
                <Image
                  width={50}
                  height={50}
                  src={useConvUser(conversation)[0]?.image || img}
                  alt=""
                />
              </div>
              <div>
                <div className="font-semibold dark:text-white">
                  {useConvUser(conversation)[0]?.name}
                </div>
                {/* <div className="font-semibold">{conversation.users[0].name}</div> */}
                {conversation?.messages[conversation?.messages?.length - 1]
                  ?.text == null &&
                conversation?.messages[conversation?.messages?.length - 1]
                  ?.image != null ? (
                  <div className="flex items-center gap-1 text-gray-800 text-xs dark:text-gray-500">
                    <IoImageOutline size={12} /> Image
                  </div>
                ) : (
                  <div className="text-gray-600 text-xs dark:text-gray-500">
                    {
                      conversation?.messages[conversation?.messages?.length - 1]
                        ?.text
                    }
                  </div>
                )}
              </div>
            </div>

            <div className="text-xs text-gray-700 dark:text-gray-400">
              <LastMessageInfo conversation={conversation} />
            </div>
            {/* {
                format(
                 new Date(
                  conversation?.messages[conversation?.messages?.length - 1]
                    ?.createdAt
                 )
                 'p',
               )
              } */}
          </ul>
        ))}
      </div>
    </div>
  )
}
