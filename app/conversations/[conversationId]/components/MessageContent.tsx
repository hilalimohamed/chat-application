'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import clsx from 'clsx'
import { format, formatDistance, subDays } from 'date-fns'
import toDate from 'date-fns/toDate'
// import { motion, useScroll } from 'framer-motion'

const MessageBox = ({ data }: { data: any }) => {
  // console.log('hada howa hh  ', data)
  const session = useSession()

  const isOwn = session.data?.user?.email === data?.user?.email

  const container = clsx('flex gap-3 p-1', isOwn && 'justify-end')
  const avatar = clsx(isOwn && 'order-2')
  const body = clsx('flex flex-col gap-2 ', isOwn && 'items-end')
  const message = clsx(
    'text-sm w-fit relative hover:animate-bounce',
    // 'text-sm w-fit overflow-hidden',
    isOwn
      ? 'bg-sky-500 text-white before:bg-sky-500 before:-right-1'
      : 'bg-gray-100 before:bg-gray-100 before:-left-1',
    data.image
      ? "rounded relative before:absolute before:content-[''] before:w-3 before:top-2 before:h-3 before:rotate-45"
      : "py-2 pb-3 px-3 pr-9 rounded relative before:absolute before:content-[''] before:w-3 before:h-3 before:rotate-45",
    // : "rounded-xl rounded-se-none relative before:absolute before:content-[''] before:w-3 before:h-3 before:bg-white before:rotate-45 before: before:-right-2 before:top-0 py-2 px-3",
  )

  // const bottomRef = useRef<HTMLDivElement>(null)
  // const { scrollYProgress } = useScroll({
  //   target: bottomRef,
  //   offset: ['0 1', '1.33 1'],
  // })

  return (
    // <motion.div
    //   ref={bottomRef}
    //   style={{
    //     scale: scrollYProgress,
    //     opacity: scrollYProgress,
    //   }}
    // >
    <div className={container}>
      <div className={body}>
        <div className="flex items-center gap-1">
          <div className="text-xs text-gray-500">{data.user.name}</div>
          <div className="text-xs text-gray-400">
            {format(new Date(data.createdAt), 'dd/MM/yyyy')}
            {/* {formatDistance(subDays(new Date(data.createdAt), 0), new Date(), {
              addSuffix: true,
              includeSeconds: true,
            })} */}
          </div>
        </div>
        <div className={message}>
          {data.image ? (
            <Image
              alt="Image"
              height="288"
              width="288"
              src={data.image}
              className="object-cover cursor-pointer hover:scale-[1.04] transition translate p-2"
            />
          ) : (
            <div>{data.text}</div>
          )}
          <div className=" text-[9px] absolute -bottom-1 right-0.5 pb-0.5">
            {format(new Date(data.createdAt), 'HH:mm eeee')}
          </div>
        </div>
      </div>
      {/* <div className="text-sm p-5 w-[75%] bg-slate-600 text-slate-100 rounded-lg relative before:absolute before:content-[''] before:w-3 before:h-3 before:bg-slate-600 before:rotate-45 before: before:-left-1 before:top-4">
        <p>Hi There!</p>
        <p>
          Looking to get Started? I can help answer to your personal questions!
        </p>
      </div> */}
    </div>
    /* </motion.div> */
  )
}

export default MessageBox
