import SideBarO from '@/app/components/sideBar/SideBarO'
import TheConversation from './components/TheConversation'
import getConversations from '@/app/action/getConversation'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const conversations = await getConversations()

  return (
    <div className="h-screen dark:bg-[#1F1F1F]">
      <SideBarO>
        <TheConversation conversations={conversations} />
        {children}
      </SideBarO>
    </div>
  )
}
