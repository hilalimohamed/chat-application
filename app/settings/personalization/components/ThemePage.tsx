// 'use client'
// import { useEffect, useState } from 'react'
// import useThemeStore from '@/app/store/useThemeStore'
// import { applyThemePreference } from '@/utils/theme'

// export default function ThemePage() {
//   const toggleTheme = useThemeStore((state: any) => state.toggleTheme)
//   const theme = useThemeStore((state: any) => state.theme)
//   const [dark, setDark] = useState(
//     'p-4 rounded bg-black dark:bg-white text-white dark:text-black font-semibold',
//   )
//   // console.log('toggle theme :>> ', toggleTheme)

//     const buttonStyle =
//       theme === 'dark'
//         ? 'p-4 rounded bg-black text-white font-semibold'
//         : 'p-4 rounded bg-white text-black font-semibold'

//   useEffect(() => {
//     applyThemePreference(theme)
//   }, [theme])
//   return (
//     <div>
//       <button onClick={toggleTheme} type="button" className={buttonStyle}>
//         T
//       </button>
//     </div>
//   )
// }

'use client'
import { useEffect } from 'react'
import useThemeStore from '@/app/store/useThemeStore'
import { applyThemePreference } from '@/utils/theme'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemePage() {
  const toggleTheme = useThemeStore((state: any) => state.toggleTheme)
  const theme = useThemeStore((state: any) => state.theme)

  useEffect(() => {
    applyThemePreference(theme)
  }, [theme])

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={toggleTheme}
        type="button"
        className={`relative w-20 h-10 flex items-center rounded-full p-1 transition-colors ${
          theme === 'dark'
            ? 'bg-[#29a0eb] border-2 border-[#29a0eb]'
            : 'bg-white border-2 border-[#282828]'
        }`}
      >
        {/* Circle that moves with the theme */}
        <div
          className={`absolute w-8 h-8 rounded-full shadow-md transform transition-transform ${
            theme === 'dark'
              ? 'translate-x-9 bg-white'
              : 'translate-x-0 bg-[#282828]'
          }`}
        />
        {/* Light and Dark icons */}
        <div className="absolute left-2.5 text-white">
          <FaSun
            className={`h-5 w-5 ${
              theme === 'dark' ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>
        <div className="absolute right-2 text-[#282828]">
          <FaMoon
            className={`h-6 w-6 ${
              theme === 'dark' ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </button>
    </div>
  )
}
