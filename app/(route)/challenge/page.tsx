'use client'

import ChallengeCard from './_components/ChallengeCard'

export default function ChallengePage() {
  return (
    <div className='flex max-h-full flex-col gap-4 px-6 pt-[88px]'>
      <div className='flex w-full'>
        <div className='flex h-12 w-1/2 items-center justify-center border-b border-white font-semibold'>진행중</div>
        <div className='flex h-12 w-1/2 items-center justify-center border-b border-[#595959] font-semibold text-[#595959]'>
          완료
        </div>
      </div>
      <div className='flex flex-col gap-3 overflow-y-auto pb-20'>
        {new Array(10).fill(0).map((_, index) => {
          return <ChallengeCard key={index} />
        })}
      </div>
    </div>
  )
}
