import { User } from '@prisma/client'
import Image from 'next/image'
import img from '@/public/images/profile.jpeg'

export default function theUsers({ users }: { users: User[] }) {
  console.log('the Users : ', users)
  return (
    <div className="fixed left-0 lg:pl-28">
      <div className="font-bold text-xl">Chats</div>
      <div>
        {users.map((user) => (
          <ul className="flex gap-2 items-center mb-2">
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-sky-800 cursor-pointer">
              <Image width={50} height={50} src={img} alt="" />
            </div>
            <div>{user.name}</div>
          </ul>
        ))}
      </div>
    </div>
  )
}
