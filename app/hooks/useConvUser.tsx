import { useSession } from 'next-auth/react'
import { useMemo } from 'react'

const useConvUser = (conversation: any) => {
  const session = useSession()

  const otherUser = useMemo(() => {
    const userEmail = session.data?.user?.email

    const otherUser = conversation?.users?.filter(
      (user: any) => user.email !== userEmail,
    )

    return otherUser
  }, [session.data?.user?.email, conversation?.users])

  return otherUser
}

export default useConvUser
