// import { withAuth } from 'next-auth/middleware'

// export default withAuth({
//   // Matches the pages config in `[...nextauth]`
//   pages: {
//     signIn: '/',
//   },
// })
// export const config = {
//   matcher: ['/users/:path*', '/conversations/:path*', '/settings/:path*'],
// }

import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
  const { pathname } = req.nextUrl

  // console.log('Token:', token)
  // console.log('Accessing path:', pathname)

  if (!token) {
    // console.log('No token found, redirecting to login...')
    if (
      pathname !== '/' &&
      pathname !== '/register' &&
      pathname !== '/reset-password' &&
      pathname !== '/forgot-password' &&
      pathname !== '/verify-email'
    ) {
      return NextResponse.redirect(new URL('/', req.url))
    }
  } else {
    // User is logged in
    if (
      pathname === '/' ||
      pathname === '/register' ||
      pathname === '/reset-password' ||
      pathname === '/forgot-password' ||
      pathname === '/verify-email'
    ) {
      // console.log('Token exists, redirecting from root/register to /conversations...',)
      return NextResponse.redirect(new URL('/conversations', req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/users/:path*',
    '/conversations/:path*',
    '/settings/:path*',
    '/',
    '/register',
    '/reset-password',
    '/forgot-password',
    '/verify-email',
  ],
}
