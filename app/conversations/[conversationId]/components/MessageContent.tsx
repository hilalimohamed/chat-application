'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import clsx from 'clsx'
import { format, formatDistance, subDays } from 'date-fns'
// import { motion, useScroll } from 'framer-motion'

const MessageBox = ({ data }: { data: any }) => {
  console.log('hada howa   ', data)
  const session = useSession()

  const isOwn = session.data?.user?.email === data?.user?.email

  const container = clsx('flex gap-3 p-1', isOwn && 'justify-end')
  const avatar = clsx(isOwn && 'order-2')
  const body = clsx('flex flex-col gap-2', isOwn && 'items-end')
  const message = clsx(
    'text-sm w-fit overflow-hidden',
    isOwn ? 'bg-sky-500 text-white' : 'bg-gray-100',
    data.image ? 'rounded-md p-0' : 'rounded-full py-2 px-3',
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
            {/* {format(new Date(data.createdAt),'p')} */}
            {formatDistance(subDays(new Date(data.createdAt), 0), new Date(), {
              addSuffix: true,
              includeSeconds: true,
            })}
          </div>
        </div>
        <div className={message}>
          {data.image ? (
            <Image
              alt="Image"
              height="288"
              width="288"
              src={data.image}
              className="object-cover cursor-pointer hover:scale-125 transition translate"
            />
          ) : (
            <div>{data.text}</div>
          )}
        </div>
      </div>
    </div>
    /* </motion.div> */
  )
}

export default MessageBox
