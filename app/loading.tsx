import Image from 'next/image'
import React from 'react'
import img from '@/public/images/profile.jpeg'
import { HiChatBubbleBottomCenterText } from 'react-icons/hi2'
import { TbBrandNextcloud, TbOvalVerticalFilled } from 'react-icons/tb'
import { MdEggAlt } from 'react-icons/md'
import { BsCloudFill } from 'react-icons/bs'
import { GiSunCloud } from 'react-icons/gi'

export default function Loading() {
  return (
    <div className="flex h-screen w-screen">
      <div className="dark:bg-[#181818] dark:border-r-gray-100 dark:border-opacity-5 hidden lg:inset-y-0 lg:w-32 lg:bg-white lg:border-r-[1px] lg:flex lg:flex-col justify-between items-center">
        <div className="w-full">
          <div className="h-[64px] w-full bg-[#5d5d5e29] animate-pulse flex items-center justify-center">
            <div className="w-6 h-4 bg-[#333434] rounded"></div>
          </div>
          <div className="h-[64px] w-full bg-[#5d5d5e19] animate-pulse flex items-center justify-center">
            <div className="w-6 h-4 bg-[#333434cf] rounded"></div>
          </div>
          <div className="h-[64px] w-full bg-[#5d5d5e0e] animate-pulse flex items-center justify-center">
            <div className="w-6 h-4 bg-[#33343480] rounded"></div>
          </div>
        </div>
        <div className="w-full">
          <div className="h-[64px] w-full bg-[#5d5d5e09] animate-pulse flex items-center justify-center">
            <div className="w-6 h-4 bg-[#33343475] rounded"></div>
          </div>
          <div className="h-[64px] w-full bg-[#5d5d5e15] animate-pulse flex items-center justify-center">
            <div className="opacity-30 h-10 w-10 overflow-hidden rounded-full border-2 cursor-pointer dark:border-white">
              <Image width={50} height={50} src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block px-2 dark:bg-[#1F1F1F]">
        <div className="w-[336px] h-9 mx-5 my-3 rounded">
          <div className="h-6 bg-[#333434] mt-6 rounded w-1/2 opacity-40"></div>
        </div>
        <div className="w-[345px] h-[80px] mx-5 my-3 p-3 flex gap-3 items-center rounded bg-[#5d5d5e3e] animate-pulse">
          <div className="opacity-30 h-12 w-[60px] overflow-hidden rounded-full border-2 cursor-pointer dark:border-white">
            <Image width={50} height={50} src={img} alt="" />
          </div>
          <div className="p-2 h-3/4 w-full space-y-2.5 animate-pulse">
            <div className="h-2 bg-gray-200 rounded w-1/2 opacity-10"></div>
            <div className="h-2 bg-gray-200 rounded w-3/4 opacity-70"></div>
          </div>
        </div>
        <div className="w-[345px] h-[80px] mx-5 my-3 p-3 flex gap-3 items-center rounded bg-[#5d5d5e3e] animate-pulse">
          <div className="opacity-50 h-12 w-[60px] overflow-hidden rounded-full border-2 cursor-pointer dark:border-white">
            <Image width={50} height={50} src={img} alt="" />
          </div>
          <div className="p-2 h-3/4 w-full space-y-2.5 animate-pulse">
            <div className="h-2 bg-gray-200 rounded w-1/3 opacity-50"></div>
            <div className="h-2 bg-gray-200 rounded w-1/2 opacity-20"></div>
          </div>
        </div>
        <div className="w-[345px] h-[80px] mx-5 my-3 p-3 flex gap-3 items-center rounded bg-[#5d5d5e3e] animate-pulse">
          <div className="opacity-40 h-12 w-[60px] overflow-hidden rounded-full border-2 cursor-pointer dark:border-white">
            <Image width={50} height={50} src={img} alt="" />
          </div>
          <div className="p-2 h-3/4 w-full space-y-2.5 animate-pulse">
            <div className="h-2 bg-gray-200 rounded w-1/4 opacity-30"></div>
            <div className="h-2 bg-gray-200 rounded w-2/3 opacity-70"></div>
          </div>
        </div>
      </div>
      <div className="hidden w-full dark:bg-[#282828] z-40 lg:flex lg:flex-col justify-center items-center">
        <div className="flex items-end gap-3 opacity-20">
          <BsCloudFill size={30} className="text-gray-200 animate-pulse" />
          <TbOvalVerticalFilled
            size={90}
            className="text-gray-200 animate-pulse"
          />
          <GiSunCloud size={35} className="text-gray-200 animate-pulse" />
        </div>
        <div className="h-3 my-4 bg-gray-200 rounded-full w-1/4 opacity-10 animate-pulse"></div>
        <div className="h-2 my-2 bg-gray-200 rounded-full w-3/5 opacity-20 animate-pulse"></div>
        <div className="h-2 my-2 bg-gray-200 rounded-full w-4/5 opacity-30 animate-pulse"></div>
        <div className="h-2 my-2 bg-gray-200 rounded-full w-1/6 opacity-5 animate-pulse"></div>
      </div>
    </div>
  )
}
