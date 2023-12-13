import Image from 'next/image'
import Link from 'next/link'

import { ROUTE } from '@/app/_constants/route'

export default function ChooseProfile() {
  return (
    <main className='flex h-full flex-col items-center px-6 pb-16 pt-11'>
      <h1 className='text-2xl font-semibold'>프로필 생성</h1>
      <div className='flex w-full flex-col gap-6'>
        <div className='mt-10 flex flex-col items-center'>
          <Image src='/images/CH1.png' width={187} height={187} alt='프로필 이미지' />
          <div className='mt-3 flex flex-col items-center gap-1'>
            <input className='mb-1 w-[84px] appearance-none border-0 border-b border-b-[#B8B8B8] bg-transparent p-0 text-center text-xl focus:ring-0' />
            <span className='text-xs'>0/4</span>
          </div>
        </div>
        <div className='mx-auto grid w-fit grid-cols-3 gap-x-3 gap-y-4'>
          <Image src='/images/CH1.png' width={80} height={80} alt='프로필 이미지' />
          <Image src='/images/CH2.png' width={80} height={80} alt='프로필 이미지' />
          <Image src='/images/CH3.png' width={80} height={80} alt='프로필 이미지' />
          <Image src='/images/CH4.png' width={80} height={80} alt='프로필 이미지' />
          <Image src='/images/CH5.png' width={80} height={80} alt='프로필 이미지' />
          <Image src='/images/CH6.png' width={80} height={80} alt='프로필 이미지' />
        </div>
        <Link
          className='mt-28 flex h-14 w-full items-center justify-center rounded-[50px] bg-[#482BD9]'
          href={ROUTE.HOME}
        >
          달 탐사 시작하기
        </Link>
      </div>
    </main>
  )
}
