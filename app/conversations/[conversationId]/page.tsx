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
  params: { conversationId: any }
}) {
  const conversationId = await getConvertationId(params.conversationId)
  const messages = await getMessages(params.conversationId)
  // const lastMessages = await getLastMessages(params.conversationId)

  return (
    <div className="lg:ml-[310px] h-full dark:bg(${img})">
      <div className="h-full flex flex-col">
        <ConversationById conversationId={conversationId} />
        <Messages allMessages={messages} />
        <FormPage conversationId={conversationId} />
      </div>
    </div>
  )
}
