'use client'

import { UserContextProvider } from '@/app/_components/providers/UserProvider'
import Header from '@/app/_components/shared/header'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <UserContextProvider>
      <main className='h-full pt-20'>
        <Header className='bg-dodal-main'>
          <div className='w-9' />
          <Header.Title>초대장 도착</Header.Title>
          <Header.Close
            onClick={() => {
              window.close()
            }}
          />
        </Header>
        {children}
      </main>
    </UserContextProvider>
  )
}
