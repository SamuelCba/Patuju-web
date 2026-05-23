import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Unidad Educativa Patujú',
  description: 'Institución educativa de excelencia comprometida con la formación integral de sus estudiantes',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-snippet': -1,
      'max-image-preview': 'none',
      'max-video-preview': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
