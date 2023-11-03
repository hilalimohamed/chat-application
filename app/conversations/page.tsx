import React from 'react'
import img from '@/public/icons/bg of chat app2.jpg'
import Image from 'next/image'
import IconState from '../components/IconState'

export default function page() {
  return (
    <div className="lg:ml-80 lg:block h-screen dark:bg-[#282828]">
      {/* <div className="h-full w-full overflow-hidden border-2 border-sky-800 cursor-pointer dark:border-white">
        <Image width={1000} height={1000} src={img} alt="" />
      </div> */}
      <IconState/>
    </div>
  )
}
