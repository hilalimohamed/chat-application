import getUser from '@/app/action/getUser'
import ProfilePage from './components/ProfilePage'
import BackToSettingsButton from '../components/BackToSettingsButton'

export default async function page() {
  const user = await getUser()
  return (
    <div className="lg:pl-80 lg:pr-3 lg:pt-20 dark:bg-[#282828]">
      <BackToSettingsButton />
      <div className='pt-40'>
        <ProfilePage user={user} />
      </div>
    </div>
  )
}
