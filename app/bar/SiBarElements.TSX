// 'use client'

// import { useMemo } from 'react'
// import { usePathname } from 'next/navigation'
// import { signOut } from 'next-auth/react'
// import { GiConversation } from 'react-icons/gi'
// import { TiMessages } from 'react-icons/ti'
// import { HiUsers } from 'react-icons/hi'
// import { MdLogout } from 'react-icons/md'

// export default function SiBarElements() {
//   const pathname = usePathname()
//   const theElements = useMemo(
//     () => [
//       {
//         label: 'Convertations',
//         link: '/conversations',
//         active: pathname === 'conversations',
//         icon: GiConversation,
//       },
//       {
//         label: 'Users',
//         link: '/users',
//         active: pathname === 'users',
//         icon: HiUsers,
//       },
//       {
//         label: 'Logout',
//         link: '#',
//         onClick: () => signOut(),
//         icon: MdLogout,
//       },
//     ],
//     [pathname],
//   )
//   return theElements
// }
