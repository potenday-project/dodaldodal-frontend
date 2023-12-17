'use client'

import Image from 'next/image'

import { useTodayStatusQuery } from './queries'

export const CHAMPION = {
  RED: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/red.png',
  YELLOW: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/yellow.png',
  GREEN: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/green.png',
  BLUE: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/blue.png',
  BEIGE: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/beige.png',
  PINK: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/pink.png',
}

export default function HomePage() {
  const todayStatusQuery = useTodayStatusQuery()

  if (!todayStatusQuery.isSuccess) {
    return null
  }

  const { champion, certificatedCount, explorationCount } = todayStatusQuery.data.data
  const successRate = Math.round((certificatedCount / (certificatedCount + explorationCount)) * 100) || 0

  return (
    <div className='relative h-full px-8 py-4 pt-16'>
      <h1 className='text-2xl'>오늘의 도달률</h1>
      <div className='mb-7 flex items-end'>
        <div className='h-[88px] text-[88px] font-extrabold leading-[88px] text-[#8A72FF]'>{successRate}</div>
        <span className='text-[40px] font-extrabold'>%</span>
      </div>
      <div className='text-xl'>🌙 탐사 필요 {explorationCount}</div>
      <div className='mt-3 text-xl'>🌕 탐사 완료 {certificatedCount}</div>

      <div className='absolute bottom-[10%] right-10'>
        <div className='relative aspect-[421/635] h-[45vh] w-full'>
          <Image src={CHAMPION[champion]} fill alt={champion} />
        </div>
      </div>
    </div>
  )
}
