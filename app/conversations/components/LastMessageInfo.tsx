// import React from 'react'

// function ConversationInfo({ conversation }: { conversation: any }) {
//   const lastMessage = conversation?.messages[conversation?.messages?.length - 1]
//   const lastMessageTime = lastMessage
//     ? new Date(lastMessage.createdAt).toLocaleString('en-US', {
//         weekday: 'short',
//         year: 'numeric',
//         month: 'short',
//         day: 'numeric',
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//         timeZoneName: 'short',
//       })
//     : 'Invalid Date'

//   return <div className="text-xs text-gray-400">{lastMessageTime}</div>
// }

// export default ConversationInfo
// components/ConversationInfo.js

// function formatLastMessageDate(lastMessage: any) {
//   if (!lastMessage) {
//     return 'No messages'
//   }

//   const messageDate = new Date(lastMessage.createdAt)
//   const now = new Date()

//   if (messageDate.getHours() === 0 && messageDate.getMinutes() === 0) {
//     return 'Midnight message'
//   }

//   const yesterday = new Date()
//   yesterday.setDate(now.getDate() - 1)
//   yesterday.setHours(0, 0, 0, 0)

//   if (messageDate >= yesterday && messageDate < now) {
//     return 'Yesterday message'
//   }

//   if (isNaN(messageDate.getTime())) {
//     return 'Unusual date'
//   }

//   return messageDate.toLocaleString('en-US', {
//     weekday: 'short',
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
//     timeZoneName: 'short',
//   })
// }
// console.log('messageDate',messageDate)
// console.log('now',now)
// console.log('oneDayInMillis',oneDayInMillis)
// console.log('dayDifference',dayDifference)

// function formatLastMessageDate(lastMessage: any) {
//   if (!lastMessage) {
//     return 'No messages'
//   }

//   const messageDate: any = new Date(lastMessage.createdAt)
//   const now: any = new Date()
//   const oneDayInMillis = 24 * 60 * 60 * 1000 // 1 day in milliseconds

//   // Calculate the difference in days
//   const dayDifference = Math.floor((now - messageDate) / oneDayInMillis)

//   if (dayDifference === 0) {
//     // The message was sent today, so show the time in 12-hour format
//     return messageDate.toLocaleString('en-US', {
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: true,
//     })
//   } else if (dayDifference === 1) {
//     // The message was sent yesterday
//     return 'Yesterday'
//   } else {
//     // The message is older, show the date in short format
//     return messageDate.toLocaleString('en-US', {
//       day: 'numeric',
//       month: 'numeric',
//       year: 'numeric',

//     })
//   }
// }

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
    return messageDate.toLocaleString('en-US', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    })
  }
}

function ConversationInfo({ conversation }: { conversation: any }) {
  const lastMessage = conversation?.messages[conversation?.messages?.length - 1]
  const lastMessageTime = formatLastMessageDate(lastMessage)

  return (
    <div className="text-xs text-gray-700 dark:text-gray-400">
      {lastMessageTime}
    </div>
  )
}

export default ConversationInfo
