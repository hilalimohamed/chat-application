'use client'

import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import MessageContent from './MessageContent'
import img from '@/public/icons/bg of chat app2.jpg'
import Image from 'next/image'
import NoMessages from './NoMessages'
import { pusherClient } from '@/lib/pusher'
import useConversation from '@/app/hooks/useConversation'
import { find } from 'lodash'

const Messages = ({ allMessages }: { allMessages: any }) => {
  const [messages, setMessages] = useState(allMessages)
  // console.log('mess  ', messages.length)
  const bottomRef = useRef<HTMLDivElement>(null)
  const { conversationId } = useConversation()
  // console.log('ga : ',conversationId)

  useEffect(() => {
    // if (!conversationId) return;
    pusherClient.subscribe(conversationId)
    bottomRef?.current?.scrollIntoView()

    const updateMessageHandler = (newMessage: any) => {
      setMessages((current: any) => {
        if (find(current, { id: newMessage.id })) {
          return current
        }
        return [...current, newMessage]
      })
      bottomRef?.current?.scrollIntoView()
      // bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    pusherClient.bind('new-message', updateMessageHandler)

    return () => {
      pusherClient.unsubscribe(conversationId)
      pusherClient.unbind('new-message', updateMessageHandler)
    }
  }, [conversationId])

  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#484747e8] border-l border-gray-400 dark:border-gray-600 dark:border-opacity-10">
      {/* <div className="absolute z-0 overflow-hidden border-2 border-sky-700">
        <Image width={900} height={600} src={img} alt="" />
      </div> */}
      <div className="z-50 relative mx-2">
        {messages.length !== 0 ? (
          messages.map((message: any) => (
            <MessageContent key={message.id} data={message} />
          ))
        ) : (
          <NoMessages />
        )}
        <div className="pt-7" ref={bottomRef} />
      </div>
      {/* <div className="pt-11" /> */}
    </div>
  )
}

export default Messages
