import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const COOKIE_NAME = 'geo-country';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Skip if cookie already set
  if (request.cookies.has(COOKIE_NAME)) {
    return response;
  }

  // Vercel injects x-vercel-ip-country automatically
  const country = request.headers.get('x-vercel-ip-country') ?? 'US';

  response.cookies.set(COOKIE_NAME, country, {
    httpOnly: false, // Needs to be readable from client JS
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 24 hours
    path: '/',
  });

  return response;
}

export const config = {
  matcher: [
    // Match all pages except static files and API routes
    '/((?!_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$|api/).*)',
  ],
};
