'use client'
import Image from 'next/image'
import img from '@/public/images/profile.jpeg'
import useConvUser from '@/app/hooks/useConvUser'

export default function ConversationById({
  conversationId,
}: {
  conversationId: any
}) {
  // console.log('conversation >> / :  ', conversationId[0],'  !user :    ',convUser[0].name)
  const convUser = useConvUser(conversationId[0])
  return (
    <div className="relative z-30 flex gap-5 px-3 py-4 border-b border-gray-400 w-full border-l bg-white dark:bg-[#1F1F1F] dark:border-gray-600 dark:border-opacity-10">
      <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-sky-800 cursor-pointer dark:border-white">
        <Image
          width={50}
          height={50}
          src={convUser[0]?.image ||img}
          alt=""
        />
      </div>
      <div>
        <div className="font-semibold dark:text-white">{convUser[0]?.name}</div>
        <div className="text-xs dark:text-gray-400">Active</div>
      </div>
    </div>
  )
}
