
import getUser from '@/app/action/getUser'
import ProfilePage from './components/ProfilePage'

export default async function page() {
  const user = await getUser()
  return (
    <div className="lg:pl-80 lg:pr-3 lg:pt-20 dark:bg-[#282828]">
      <ProfilePage user={user} />
    </div>
  )
}
