import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Unidad Educativa Patujú',
  description: 'Institución educativa de excelencia comprometida con la formación integral de sus estudiantes',
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
