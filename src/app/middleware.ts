import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // properties APIのPOST/PATCH/DELETEを保護
  if (pathname.startsWith('/api/properties')) {
    const method = request.method
    
    if (['POST', 'PATCH', 'DELETE'].includes(method)) {
      const token = await getToken({ 
        req: request, 
        secret: process.env.NEXTAUTH_SECRET 
      })
      
      if (!token) {
        return NextResponse.json(
          { error: 'Unauthorized' },
          { status: 401 }
        )
      }
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/api/properties/:path*'
}
