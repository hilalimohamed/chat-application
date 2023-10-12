
import Conversation from "../components/Conversation";
// import { getUser } from '@/app/action/getUser'


export default async function page() {
  // const user = await getUser()
  return (
    <div className="lg:pl-80 lg:block h-screen">
      <Conversation 
      // user={user} 
      />
    </div>
  )
}
