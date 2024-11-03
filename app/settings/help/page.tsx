import React from 'react'
import BackToSettingsButton from '../components/BackToSettingsButton'

export default function Page() {
  return (
    <div className="relative lg:pl-80 dark:text-white">
      <BackToSettingsButton />

      <div className="pt-12 lg:pt-0 h-screen flex justify-center items-center">help</div>
    </div>
  )
}
