import { NextRequest, NextResponse } from 'next/server'

const PRIVATE_USER = process.env.PRIVATE_SITE_USER
const PRIVATE_PASSWORD = process.env.PRIVATE_SITE_PASSWORD
const PRIVATE_ENABLED = process.env.PRIVATE_SITE_ENABLED !== 'false'

function unauthorized() {
  return new NextResponse('Sitio privado. Ingresa usuario y contraseña para continuar.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Unidad Educativa Patuju", charset="UTF-8"',
      'Cache-Control': 'no-store',
    },
  })
}

function isValidAuth(authHeader: string | null) {
  if (!PRIVATE_USER || !PRIVATE_PASSWORD || !authHeader?.startsWith('Basic ')) {
    return false
  }

  try {
    const encodedCredentials = authHeader.split(' ')[1]
    const decodedCredentials = atob(encodedCredentials)
    const separatorIndex = decodedCredentials.indexOf(':')

    if (separatorIndex === -1) {
      return false
    }

    const user = decodedCredentials.slice(0, separatorIndex)
    const password = decodedCredentials.slice(separatorIndex + 1)

    return user === PRIVATE_USER && password === PRIVATE_PASSWORD
  } catch {
    return false
  }
}

export function middleware(request: NextRequest) {
  if (!PRIVATE_ENABLED) {
    return NextResponse.next()
  }

  const authHeader = request.headers.get('authorization')

  if (isValidAuth(authHeader)) {
    const response = NextResponse.next()
    response.headers.set('Cache-Control', 'no-store')
    return response
  }

  return unauthorized()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt)$).*)',
  ],
}
