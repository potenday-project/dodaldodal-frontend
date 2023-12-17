'use client'

import Image from 'next/image'
import Link from 'next/link'

import RightArrowCircleIcon from '@/app/_components/icons/RightArrowCircleIcon'
import { useUserContext } from '@/app/_components/providers/UserProvider'
import { ROUTE } from '@/app/_constants/route'

import { CHAMPION } from '../sign-up/page'

import BadgeCard from './_components/badge-card'
import { useUserStatusQuery } from './queries'

const BADGES = [
  {
    imageUrl: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/badge1.png',
    title: '달 탐사 자격증',
    description: '도달 여행을 시작했어요',
  },
  {
    imageUrl: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/badge2.png',
    title: 'Jr.암스트롱',
    description: '다섯 걸음 걸었어요',
  },
  {
    imageUrl: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/badge3.png',
    title: '마이 퍼스트 문',
    description: '도달 챌린지 첫 우승',
  },
]

export default function MePage() {
  const userStatusQuery = useUserStatusQuery()
  const { user } = useUserContext()

  if (!userStatusQuery.isSuccess) {
    return null
  }

  const { completedCount, startedCount, friendCount } = userStatusQuery.data.data

  return (
    <div className='pb-20 pt-28'>
      <div className='mx-6 mb-5 flex flex-col gap-5 border-b border-white pb-6'>
        <div className='flex flex-col items-center gap-3'>
          <Image
            className='rounded-full bg-white'
            src={CHAMPION.DEFAULT[user.champion]}
            width={187}
            height={187}
            alt=''
          />
          <span className='text-xl font-semibold'>{user.nickname}</span>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <div className='flex items-center'>
            <span className='mr-2'>🚀</span>
            <span className='mr-1 text-lg font-semibold'>{startedCount}개</span>
            <span className='text-[#C8C8C8]'>의 달을 여행했어요</span>
          </div>
          <div className='flex items-center'>
            <span className='mr-2'>🌕</span>
            <span className='mr-1 text-lg font-semibold'>{completedCount}개</span>
            <span className='text-[#C8C8C8]'>의 달에 도착했어요</span>
          </div>
          <div className='flex items-center'>
            <span className='mr-2'>👩‍🚀</span>
            <span className='mr-1 text-lg font-semibold'>{friendCount}명</span>
            <span className='text-[#C8C8C8]'>의 친구들과 여행했어요</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 px-6'>
        <div className='flex justify-between px-2'>
          <span className='text-xl font-semibold'>달달 뱃지</span>
          <Link href={ROUTE.BADGES}>
            <RightArrowCircleIcon />
          </Link>
        </div>
        <div className='flex gap-2'>
          {BADGES.map((badge) => {
            return <BadgeCard key={badge.title} {...badge} />
          })}
        </div>
      </div>
    </div>
  )
}
