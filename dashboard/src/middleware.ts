import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value

  // If token is missing, redirect to login
  if (!accessToken) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Token exists – allow to continue
  return NextResponse.next()
}

// ✅ Protect all routes under /dashboard
export const config = {
  matcher: ['/dashboard/:path*'],
}
