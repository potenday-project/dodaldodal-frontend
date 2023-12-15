import localFont from 'next/font/local'

import type { Metadata } from 'next'

import '@/app/_styles/globals.css'

import CoreProvider from '@/app/_components/providers/CoreProvider'
import { cn } from '@/app/_styles/utils'

const myFont = localFont({
  src: '../_assets/fonts/PretendardVariable.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '도달도달 - 1:1 매칭 목표 달성 서비스',
  description: '1:1 매칭 목표 달성 서비스',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta httpEquiv='Content-Security-Policy' content='upgrade-insecure-requests' />
        <link rel='icon' href='../../favicon.ico' sizes='any' />
      </head>
      <body className={cn(myFont.className, 'mx-auto max-w-lg text-white')}>
        <CoreProvider>{children}</CoreProvider>
      </body>
    </html>
  )
}
