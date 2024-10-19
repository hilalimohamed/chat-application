import useConversation from '@/app/hooks/useConversation'
import { pusherClient } from '@/app/lib/pusher'
import { find } from 'lodash'
import { useEffect, useRef, useState } from 'react'

function formatLastMessageDate(lastMessage: any) {
  if (!lastMessage) {
    return 'No messages'
  }

  const messageDate: any = new Date(lastMessage.createdAt)
  const now: any = new Date()
  // const oneDayInMillis = 24 * 60 * 60 * 1000 // 1 day in milliseconds

  const isSameDay = now.getDate() === messageDate.getDate()
  const isYesterday =
    now.getDate() - messageDate.getDate() === 1 &&
    now.getMonth() === messageDate.getMonth() &&
    now.getFullYear() === messageDate.getFullYear()

  if (isSameDay) {
    // The message was sent today, so show the time in 12-hour format
    return messageDate.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
  } else if (isYesterday) {
    // The message was sent yesterday
    return 'Yesterday'
  } else {
    // The message is older, show the date in short format
    return messageDate.toLocaleString('en-GB', {
      // month: 'numeric',
      // day: 'numeric',
      // year: 'numeric',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }
}

function ConversationInfo({ conversation }: { conversation: any }) {
  const lastMessage = conversation?.messages[conversation?.messages?.length - 1]
  const lastMessageTime = formatLastMessageDate(lastMessage)

  // const bottomRef = useRef<HTMLDivElement>(null)
  // const { conversationId } = useConversation()
  // // console.log('ga : ',conversationId)

  // useEffect(() => {
  //   // if (!conversationId) return

  //   pusherClient.subscribe(conversationId)
  //   bottomRef?.current?.scrollIntoView()

  //   const updateMessageHandler = (newMessage: any) => {
  //     setMessage((currentMessage: any) => {
  //       // If it's the same message, return the current one
  //       if (currentMessage?.id === newMessage.id) {
  //         return currentMessage
  //       }
  //       // Otherwise, set the new message
  //       return newMessage
  //     })
  //   }

  //   pusherClient.bind('last-message', updateMessageHandler)

  //   return () => {
  //     pusherClient.unsubscribe(conversationId)
  //     pusherClient.unbind('last-message', updateMessageHandler)
  //   }
  // }, [conversationId])

  return (
    <div className="text-xs text-gray-700 dark:text-gray-400">
      {lastMessageTime}
    </div>
  )
}

export default ConversationInfo
