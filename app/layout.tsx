import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ELOM DEV',
  description: 'Created with ELOM DEV',
  generator: 'ELOM DEV',
}

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>

        <link rel="icon" href="/logo_1.png" />
      </head>
  
      <body>{children}</body>
    </html>
  )
}
