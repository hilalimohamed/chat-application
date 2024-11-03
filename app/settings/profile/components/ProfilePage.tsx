import ImagePage from './ImagePage'
import UpdateName from './UpdateName'
import UpdateAbout from './UpdateAbout'

export default function ProfilePage({ user }: { user: any }) {
  return (
    <div className="border-2 border-gray-200 lg:py-20 flex justify-center place-items-center flex-col relative dark:">
      <div className="h-36 w-36 overflow-hidden rounded-full border-2 border-sky-500 absolute -top-16 dark:border-white">
        <ImagePage user={user} />
      </div>
      <div className="pt-20 flex lg:flex-row flex-col gap-10">
        <UpdateName user={user} />
        <UpdateAbout user={user} />
      </div>
    </div>
  )
}
