'use client'

import { useState } from 'react'

import { cn } from '@/app/_styles/utils'

import ChallengeCard from './_components/ChallengeCard'
import ChallengeFormDialog from './_components/ChallengeFormDialog'

export default function ChallengePage() {
  const [tab, setTab] = useState<'ongoing' | 'completed'>('ongoing')

  return (
    <div className='relative flex max-h-full flex-col gap-4 px-6 pt-[88px]'>
      <div className='flex w-full'>
        <button
          className={cn('flex h-12 w-1/2 items-center justify-center border-b border-white font-semibold', {
            'border-b-[#595959] text-[#595959]': tab !== 'ongoing',
          })}
          onClick={() => {
            setTab('ongoing')
          }}
        >
          진행중
        </button>
        <button
          className={cn('flex h-12 w-1/2 items-center justify-center border-b border-[white] font-semibold', {
            'border-b-[#595959] text-[#595959]': tab !== 'completed',
          })}
          onClick={() => {
            setTab('completed')
          }}
        >
          완료
        </button>
      </div>
      <div className='flex flex-col gap-3 overflow-y-auto pb-20'>
        {new Array(10).fill(0).map((_, index) => {
          return <ChallengeCard key={index} />
        })}
      </div>
      <ChallengeFormDialog />
    </div>
  )
}
