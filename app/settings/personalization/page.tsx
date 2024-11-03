import React from 'react'

import ThemePage from './components/ThemePage'
import BackToSettingsButton from '../components/BackToSettingsButton'

export default function Page() {
  return (
    <div className="lg:pl-80 dark:bg-[#282828]">
      <BackToSettingsButton />
      <ThemePage />
    </div>
  )
}
