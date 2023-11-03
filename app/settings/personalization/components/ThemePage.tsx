'use client'
import { useEffect, useState } from 'react'
import useThemeStore from '@/app/store/useThemeStore'
import { applyThemePreference } from '@/utils/theme'

export default function ThemePage() {
  const toggleTheme = useThemeStore((state: any) => state.toggleTheme)
  const theme = useThemeStore((state: any) => state.theme)
  const [dark, setDark] = useState(
    'p-4 rounded bg-black dark:bg-white text-white dark:text-black font-semibold',
  )
  // console.log('toggle theme :>> ', toggleTheme)

  useEffect(() => {
    applyThemePreference(theme)
  }, [theme])
  return (
    <div>
      <button onClick={toggleTheme} type="button" className={dark}>
        T
      </button>
    </div>
  )
}
