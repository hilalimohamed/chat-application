import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    // colors: {
    //   gray: 'rgba(31, 31, 31, 255)',
    // },
    // colors: {
    //   // ...
    //   tahiti: {
    //     light: '#67e8f9',
    //     DEFAULT: '#06b6d4',
    //     dark: '#0e7490',
    //   },
    // },
  },
  plugins: [require('tailwind-scrollbar')],
}
export default config

//#282828
//#1F1F1F
//#181818
