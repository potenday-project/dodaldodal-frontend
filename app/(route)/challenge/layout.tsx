'use client'

import { useRouter } from 'next/navigation'
import Script from 'next/script'

import BottomNavigation from '@/app/_components/shared/bottom-navigation'
import Header from '@/app/_components/shared/header'

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <main className='h-full bg-challenge-background bg-cover bg-center bg-no-repeat'>
      <Header>
        <Header.BackIcon
          onClick={() => {
            router.back()
          }}
        />
        <Header.Title>챌린지</Header.Title>
        <div className='w-9' />
      </Header>
      {children}
      <BottomNavigation selected='challenge' />
      <Script
        src='https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.min.js'
        integrity='sha384-kYPsUbBPlktXsY6/oNHSUDZoTX6+YI51f63jCPEIPFP09ttByAdxd2mEjKuhdqn4'
        crossOrigin='anonymous'
      ></Script>
    </main>
  )
}
