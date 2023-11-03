import SideBarO from '@/app/components/sideBar/SideBarO'
import { getUsers } from '@/app/action/getUsers'
import UpdateProfile from './components/UpdateProfile'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const users = await getUsers()

  return (
    <div className="h-screen dark:bg-[#282828]">
      <SideBarO>
        <UpdateProfile />
        {children}
      </SideBarO>
    </div>
  )
}
