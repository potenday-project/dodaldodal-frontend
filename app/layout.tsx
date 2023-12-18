import localFont from 'next/font/local'

import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'

import '@/app/_styles/globals.css'

import CoreProvider from '@/app/_components/providers/CoreProvider'
import { cn } from '@/app/_styles/utils'

const myFont = localFont({
  src: '../app/_assets/fonts/PretendardVariable.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '도달도달 - 1:1 매칭 목표 달성 서비스',
  description: '1:1 매칭 목표 달성 서비스',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://dodaldodal-frontend.vercel.app/',
    title: '도달도달 - 1:1 매칭 목표 달성 서비스',
    description: '1:1 매칭 목표 달성 서비스',
    images: [
      {
        url: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/dodaldodal_rectangle.png',
        width: 800,
        height: 600,
        alt: '도달도달',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta httpEquiv='Content-Security-Policy' content='upgrade-insecure-requests' />
        <link rel='icon' href='../../favicon.ico' sizes='any' />
      </head>
      <body className={cn(myFont.className, 'mx-auto max-w-lg text-white')}>
        <CoreProvider>
          {children}
          <Analytics />
        </CoreProvider>
      </body>
    </html>
  )
}
