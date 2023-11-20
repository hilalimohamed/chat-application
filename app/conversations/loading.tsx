import Image from 'next/image'
import React from 'react'
import img from '@/public/images/profile.jpeg'
import { HiPaperAirplane, HiPhoto } from 'react-icons/hi2'
import { BsEmojiSmile, BsFillCircleFill } from 'react-icons/bs'
import { BiSolidRectangle } from 'react-icons/bi'

export default function Loading() {
  return (
    <div className="lg:ml-[310px] flex flex-col justify-center h-full items-center border-l border-[#3a3a3aa4]">
      <div className="w-full h-24 border-b border-[#3a3a3ad5]">
        <div className="pl-4 pt-3 flex gap-3 items-center rounded animate-pulse">
          <div className="opacity-30 h-10 w-11 overflow-hidden rounded-full border-2 cursor-pointer dark:border-white">
            <Image width={50} height={50} src={img} alt="" />
          </div>
          <div className="p-2 h-3/4 w-full space-y-2.5 animate-pulse">
            <div className="h-2 bg-gray-200 rounded w-1/4 opacity-10"></div>
            <div className="h-2 bg-gray-200 rounded w-2/12 opacity-40"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-full py-5 px-2 flex flex-col">
        <div className="px-2 space-y-2.5 animate-pulse flex justify-between">
          <div className="h-9 bg-gray-200 rounded w-1/4 opacity-0"></div>
          <div>
            <div className="h-2 bg-gray-200 rounded w-1/6 opacity-40"></div>
            <div className="h-9 bg-gray-200 rounded w-2/5 opacity-30"></div>
          </div>
        </div>
        <div className="px-2 w-full space-y-2.5 animate-pulse">
          <div className="h-2 bg-gray-200 rounded w-1/6 opacity-40"></div>
          <div className="h-9 bg-gray-200 rounded w-1/4 opacity-10"></div>
          <div className="h-2 bg-gray-200 rounded w-1/6 opacity-40"></div>
          <div className="h-9 bg-gray-200 rounded w-2/6 opacity-40"></div>
        </div>
        <div className="px-2 w-full space-y-2.5 animate-pulse flex justify-end">
          <div className="h-9 bg-gray-200 rounded w-1/4 opacity-50"></div>
          <div className=" flex flex-col gap-1">
            <div className="h-2 bg-gray-200 rounded w-1/6 opacity-40"></div>
            <div className="h-9 bg-gray-200 rounded w-2/12 opacity-40"></div>
          </div>
        </div>
        <div className="px-2 w-full space-y-2.5 animate-pulse flex justify-end">
          <div className="h-9 bg-gray-200 rounded w-1/2 opacity-30"></div>
          <div>
            <div className="h-9 bg-gray-200 rounded w-1/6 opacity-20"></div>
            <div className="h-2 bg-gray-200 rounded w-2/12 opacity-40"></div>
          </div>
        </div>
        <div className="px-2 w-full space-y-2.5 animate-pulse">
          <div className="h-2 bg-gray-200 rounded w-1/6 opacity-40"></div>
          <div className="h-9 bg-gray-200 rounded w-1/4 opacity-10"></div>
          <div className="h-2 bg-gray-200 rounded w-1/6 opacity-40"></div>
          <div className="h-9 bg-gray-200 rounded w-2/12 opacity-40"></div>
        </div>
      </div>
      <div className="flex w-full h-24 border-t border-[#3a3a3ac8]">
        <div className="py-3 px-4 border-t border-l border-gray-400 flex items-center gap-2 lg:gap-4 w-full dark:border-gray-600 dark:border-opacity-10">
          <BiSolidRectangle
            size={32}
            className="text-gray-200 rounded animate-pulse opacity-10"
          />
          <div className="flex items-center gap-2 lg:gap-4 w-full">
            <BsFillCircleFill
              size={30}
              className="text-gray-200 cursor-pointer animate-pulse opacity-10"
            />
            <div className="py-5 px-4 bg-neutral-100 w-full rounded-full focus:outline-none dark:bg-[#282828] animate-pulse"></div>
            <div className="rounded-full p-2 bg-gray-200 opacity-10">
              <BsFillCircleFill size={18} className="text-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
