'use client'

import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import MessageContent from './MessageContent'
import img from '@/public/icons/bg of chat app2.jpg'
import Image from 'next/image'

const Messages = ({ allMessages }: { allMessages: any }) => {
  const [messages, setMessages] = useState(allMessages)
  const bottomRef = useRef<HTMLDivElement>(null)

  //   useEffect(() => {
  //     const updateMessageHandler = (newMessage: any) => {
  //       setMessages((current: any) =>
  //         current.map((currentMessage: any) => {
  //           if (currentMessage.id === newMessage.id) {
  //             return newMessage
  //           }
  //           return currentMessage
  //         }),
  //       )
  //     }
  //   }, [])

  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#484747e8] border-l border-gray-400 dark:border-gray-600 dark:border-opacity-10">
      {/* <div className="absolute z-0 overflow-hidden border-2 border-sky-700">
        <Image width={900} height={600} src={img} alt="" />
      </div> */}
      <div className="z-50 relative mx-2">
        {messages.map((message: any) => (
          <MessageContent key={message.id} data={message} />
        ))}
        {/* <div className="pt-24" ref={bottomRef} /> */}
      </div>
      <div className="pt-11" />
    </div>
  )
}

export default Messages
