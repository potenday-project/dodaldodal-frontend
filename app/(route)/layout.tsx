import { Inter } from 'next/font/google'

import type { Metadata } from 'next'
import '@/app/_styles/globals.css'
import Providers from '@/app/_components/providers/QueryClientProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '도달도달',
  description: '도달도달',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='../favicon.png' sizes='any' />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
