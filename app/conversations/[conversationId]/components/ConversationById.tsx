'use client'
import Image from 'next/image'
import img from '@/public/images/profile.jpeg'
import useConvUser from '@/app/hooks/useConvUser'
import { AiOutlineArrowLeft, AiOutlineCaretLeft } from 'react-icons/ai'
import Link from 'next/link'

export default function ConversationById({
  conversationId,
}: {
  conversationId: any
}) {
  // console.log('conversation >> / :  ', conversationId[0],'  !user :    ',convUser[0].name)
  const convUser = useConvUser(conversationId[0])
  return (
    <div className="relative z-30 flex items-center gap-5 px-3 py-4 border-b-2 border-gray-100 w-full border-l bg-white dark:bg-[#1F1F1F] dark:border-gray-600 dark:border-opacity-10">
      <Link href="/conversations">
        <div className="dark:text-sky-500 block lg:hidden cursor-pointer">
          <AiOutlineCaretLeft size={24} />
        </div>
      </Link>
      <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-sky-800 cursor-pointer dark:border-sky-500 lg:dark:border-white">
        <Image width={50} height={50} src={convUser[0]?.image || img} alt="" />
      </div>
      <div>
        <div className="font-semibold dark:text-white">{convUser[0]?.name}</div>
        <div className="flex gap-2 items-center">
          <div className="h-2 w-2 rounded-full bg-green-600"></div>
          <div className="text-xs dark:text-gray-400">online</div>
        </div>
      </div>
    </div>
  )
}
