//sdfghnj,
// interface theParams{
//   params:
// }

import { getConvertationId } from '@/app/action/getConvertationId'
import ConversationById from './components/ConversationById'
import getMessages from '@/app/action/getMessages'
import Messages from './components/Messages'
import FormPage from './components/FormPage'

export default async function page({
  params,
}: {
  params: { conversationId: string }
}) {
  const conversationById = await getConvertationId(params.conversationId)
  // const lastMessages = await getLastMessages(params.conversationId)

  if (!conversationById) {
    return (
      <div className="lg:ml-[310px] h-full dark:bg-[#282828]">
        <h2 className="text-xl flex justify-center items-center h-screen text-gray-800 dark:text-gray-300">
          No Conversation ID Provided
        </h2>
      </div>
    )
  }

  const messages = await getMessages(params.conversationId)

  return (
    <div className="lg:ml-[310px] h-full dark:bg-[#282828]">
      <div className="h-full flex flex-col">
        <ConversationById conversationId={conversationById} />
        <Messages allMessages={messages} />
        <FormPage conversationId={conversationById} />
      </div>
    </div>
  )
}
