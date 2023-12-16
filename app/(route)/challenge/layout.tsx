'use client'

import { useRouter } from 'next/navigation'

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
    </main>
  )
}
