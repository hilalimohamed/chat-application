import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { GiConversation } from 'react-icons/gi'
import { TiMessages } from 'react-icons/ti'
import { HiUsers } from 'react-icons/hi'
import { MdLogout } from 'react-icons/md'
import useConversation from './useConversation'
import { AiOutlineSetting } from 'react-icons/ai'


export default function useLink() {
  const pathname = usePathname()
  const { conversationId } = useConversation()

  const theElements = useMemo(
    () => [
      {
        label: 'Conversations',
        link: '/conversations',
        active: pathname === '/conversations' || !!conversationId,
        icon: GiConversation,
      },
      {
        label: 'Users',
        link: '/users',
        active: pathname === '/users',
        icon: HiUsers,
      },
      {
        label: 'Logout',
        link: '#',
        onClick: () => signOut(),
        icon: MdLogout,
      },
      {
        label: 'Settings',
        link: '/settings',
        active: pathname === '/settings',
        icon: AiOutlineSetting,
      },
      {
        label: 'Profile',
        link: '/settings/profile',
        active: pathname === '/settings/profile',
        icon: MdLogout,
      },
    ],
    [pathname],
  )
  return theElements
}
