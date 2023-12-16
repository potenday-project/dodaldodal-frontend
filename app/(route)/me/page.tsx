import Image from 'next/image'

import RightArrowCircleIcon from '@/app/_components/icons/RightArrowCircleIcon'

import BadgeCard from './_components/badge-card'

export default function MePage() {
  return (
    <div className='pb-20 pt-28'>
      <div className='mb-5 flex flex-col gap-5 border-b border-white pb-6'>
        <div className='flex flex-col items-center gap-3'>
          <Image
            className='rounded-full bg-white'
            src='https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/profile_red.png'
            width={187}
            height={187}
            alt=''
          />
          <span className='text-xl font-semibold'>달다구리</span>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <div className='flex items-center'>
            <span className='mr-2'>🚀</span>
            <span className='mr-1 text-lg font-semibold'>235개</span>
            <span className='text-[#C8C8C8]'>의 달을 여행했어요</span>
          </div>
          <div className='flex items-center'>
            <span className='mr-2'>🌕</span>
            <span className='mr-1 text-lg font-semibold'>175개</span>
            <span className='text-[#C8C8C8]'>의 달에 도착했어요</span>
          </div>
          <div className='flex items-center'>
            <span className='mr-2'>👩‍🚀</span>
            <span className='mr-1 text-lg font-semibold'>175명</span>
            <span className='text-[#C8C8C8]'>의 친구들과 여행했어요</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between px-2'>
          <span className='text-xl font-semibold'>달달 뱃지</span>
          <RightArrowCircleIcon />
        </div>
        <div className='flex gap-2'>
          {new Array(3).fill(0).map((_, index) => {
            return <BadgeCard key={index} />
          })}
        </div>
      </div>
    </div>
  )
}
