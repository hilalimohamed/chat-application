'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function NotFound() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(6)

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1)
    }, 1000)

    // Redirect after 6 seconds
    const timeout = setTimeout(() => {
      router.push('/')
    }, 6000)

    // Cleanup interval and timeout on unmount
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [router])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-[#181818]">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200">
        404
      </h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-600 dark:text-gray-400">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-500 dark:text-gray-300">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="mt-2 text-gray-500 dark:text-gray-300">
        Redirecting in <span className='text-blue-400'>{countdown}</span> seconds...
      </p>
      <Link href="/">
        <div className="mt-6 px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
          Go Back Home
        </div>
      </Link>
    </div>
  )
}
