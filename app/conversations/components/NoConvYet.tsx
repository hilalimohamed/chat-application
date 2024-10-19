import React from 'react'
import Link from 'next/link'

function NoConvYet() {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-7">
      <div className="text-gray-500 text-center">
        <p className="text-lg font-semibold">No Conversations Yet</p>
        <p className="text-sm mt-2">
          Start a new conversation or wait for someone to message you!
        </p>
        <Link href="/users">
          <div className="mt-4 border border-gray-500 text-gray-400 px-4 py-2 rounded hover:bg-gray-100 hover:bg-opacity-5 hover:text-white transition cursor-pointer">
            Find Users
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NoConvYet
