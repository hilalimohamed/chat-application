'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { IoImageOutline } from 'react-icons/io5'
import img from '@/public/images/profile.jpeg'
import useConvUser from '@/app/hooks/useConvUser'
import clsx from 'clsx'
import { pusherClient } from '@/lib/pusher'
import LastMessageInfo from './LastMessageInfo'
import useConversation from '@/app/hooks/useConversation'
import NoConvYet from './NoConvYet'

export default function TheConversation({
  conversations,
}: {
  conversations: any
}) {
  const router = useRouter()
  const { isOpen } = useConversation()

  const [conversationList, setConversationList] = useState(conversations)

  const toConversasionId = (convertaionId: string) => {
    router.push(`/conversations/${convertaionId}`)
  }

  useEffect(() => {
    conversations.forEach((conversation: any) => {
      pusherClient.subscribe(conversation.id)
    })

    const handleNewMessage = (newMessage: any) => {
      setConversationList((currentConversations: any) =>
        currentConversations.map((conversation: any) => {
          if (conversation.id === newMessage.conversationId) {
            return {
              ...conversation,
              messages: [newMessage],
            }
          }
          return conversation
        }),
      )
    }

    pusherClient.bind('new-message', handleNewMessage)

    return () => {
      conversations.forEach((conversation: any) => {
        pusherClient.unsubscribe(conversation.id)
      })
      pusherClient.unbind('new-message', handleNewMessage)
    }
  }, [conversations])

  return (
    <div
      className={clsx(
        'fixed left-0 w-full lg:w-[462px] lg:pl-24 overflow-y-auto inset-y-0 lg:block scrollbar-thumb-gray-600 scrollbar-thin dark:scrollbar-thumb-[#2f2f2f]',
        isOpen ? 'hidden' : 'block',
      )}
    >
      <div className="text-2xl font-bold text-neutral-800 p-4 border-gray-200 lg:border-none border-b bg-[#181818] lg:bg-transparent dark:text-white">
        Messages
      </div>
      <div className="">
        {conversationList.length > 0 ? (
          conversationList.map((conversation: any) => (
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
                        conversation?.messages[
                          conversation?.messages?.length - 1
                        ]?.text
                      }
                    </div>
                  )}
                </div>
              </div>
              <div className="text-xs text-gray-700 dark:text-gray-400">
                <LastMessageInfo conversation={conversation} />
              </div>
            </ul>
          ))
        ) : (
          <NoConvYet />
        )}
      </div>
    </div>
  )
}
