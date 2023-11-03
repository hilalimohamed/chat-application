import img from '@/public/images/groupeChat.jpg'
import Image from 'next/image'
import { FaPeopleRoof } from 'react-icons/fa6'
import { HiChatBubbleBottomCenterText } from 'react-icons/hi2'
import { MdEmojiPeople } from 'react-icons/md'

export default function IconState() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6 h-full flex justify-center items-center bg-gray-100 dark:bg-[#282828]">
      <div className="text-center items-center flex flex-col gap-2">
        {/* <Image
          src={img}
          alt=""
          width={140}
          height={130}
          priority={true}
          className="mx-auto my-auto mb-2"
        /> */}
        <div className="flex gap-5 items-end justify-center dark:text-[#7a7a7ae4]">
          <FaPeopleRoof size={35} />
          <HiChatBubbleBottomCenterText size={80} />
          <MdEmojiPeople size={40} />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="mt-2 text-xl font-extrabold text-gray-900 dark:text-[#e9e4e4]">
            Welcome To Chat
          </h3>
          <div className="flex flex-col">
            <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-[#7a7a7ae4]">
              {/* Choose a chat or start a new conversation and feel free to send
          messages to your contacts. */}
              Browse your chats or create a new conversation with friends,
              colleagues, or loved ones.
            </h3>
            <h3 className="mt-0.5 text-sm font-semibold text-gray-900 dark:text-[#7a7a7ae4]">
              Enjoy the freedom to send messages, share updates, and stay
              connected with your contacts, all in one place
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
