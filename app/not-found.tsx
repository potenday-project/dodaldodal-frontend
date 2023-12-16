import Image from 'next/image'
import Link from 'next/link'

import Header from './_components/shared/header'
import { ROUTE } from './_constants/route'

export default function NotFound() {
  return (
    <main className='flex h-[100dvh] flex-col items-center justify-center bg-dodal-main'>
      <Header>
        <Link href={ROUTE.HOME}>
          <Header.BackIcon />
        </Link>
      </Header>
      <Image
        className='mb-3'
        src='https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/not-found.png'
        width={150}
        height={150}
        alt=''
      />
      <span className='text-lg font-semibold'>Sorry···!</span>
      <span className='text-lg font-semibold'>서비스 준비중이에요!</span>
    </main>
  )
}
