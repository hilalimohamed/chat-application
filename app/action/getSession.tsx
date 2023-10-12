import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
export default async function getSession() {
  const session = await getServerSession(authOptions)
  return session
}

// // import { getServerSession } from 'next-auth/next'
// // import { authOptions } from '@/app/api/auth/[...nextauth]/route'

// // export default async function Page() {
// //   const session = await getServerSession(authOptions)
// //   return <pre>{JSON.stringify(session, null, 2)}</pre>
// // }

// actions/getSession.ts

// actions/getSession.ts
// 'use client'
// import { NextApiRequest, NextApiResponse } from 'next';
// import { getServerSession } from 'next-auth/next';

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const session = await getServerSession(req); // Remove the array wrapping here

//     if (session) {
//       // The user is authenticated, and you can access their session data.
//       res.json({ user: session.user });
//     } else {
//       // User is not authenticated.
//       res.status(401).json({ error: 'Unauthorized' });
//     }
//   } catch (error) {
//     // Handle any potential errors here
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };
