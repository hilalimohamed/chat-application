'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { FiArrowLeft } from 'react-icons/fi'

export default function BackToSettingsButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push('/settings')}
      className="absolute top-4 left-4 lg:hidden flex items-center gap-2 text-blue-400 dark:text-blue-400"
    >
      <FiArrowLeft size={25} />
    </button>
  )
}
