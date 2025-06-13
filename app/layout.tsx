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
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-C6RLXY2V2N"></script>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-C6RLXY2V2N');
      `,
    }}
  />
  <link rel="icon" href="/logo_1.png" />
</head>
  
      <body>{children}</body>
    </html>
  )
}
