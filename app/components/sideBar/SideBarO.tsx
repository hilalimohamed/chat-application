import PageOfBar from '@/app/components/sideBar/PageOfBare'
import getUser from '@/app/action/getUser'

export default async function sideBarO({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getUser()
  return (
    <div className="h-full">
      <PageOfBar user={user} />
      <main className="lg:pl-40 h-screen">{children}</main>
    </div>
  )
}
