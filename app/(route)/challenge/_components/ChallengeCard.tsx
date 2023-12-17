import Image from 'next/image'
import Link from 'next/link'

import RightArrowIcon from '@/app/_components/icons/RightArrowIcon'
import { ROUTE } from '@/app/_constants/route'
import { type Challenge } from '@/app/_service/challenge/challenge.types'

interface ChallengeCardProps {
  challenge: Challenge
}

export default function ChallengeCard({ challenge }: ChallengeCardProps) {
  return (
    <Link href={ROUTE.CHALLENGE_DETAIL(challenge.id)} className='flex items-center rounded-xl bg-[#D9D9D9] p-4'>
      <Image
        className='mr-[10px] rounded-full bg-white'
        src='https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/profile_red.png'
        width={52}
        height={52}
        alt=''
      />
      <div className='flex flex-1 flex-col gap-1'>
        <span className='w-fit rounded-sm bg-[#F6A0AB] p-1 text-center text-[10px]'>자기계발</span>
        <span className='text-lg font-semibold text-[#595959]'>{challenge.name}</span>
        <span className='text-[10px] text-[#595959]'>{challenge.reward}</span>
        {/* <span>10%</span> */}
      </div>
      <button className='ml-[2px]'>
        <RightArrowIcon />
      </button>
    </Link>
  )
}
