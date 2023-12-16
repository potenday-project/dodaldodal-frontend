'use client'

import { useState } from 'react'

import { cn } from '@/app/_styles/utils'

import ChallengeCard from './_components/ChallengeCard'
import ChallengeFormDialog from './_components/ChallengeFormDialog'
import { useChallengesQuery } from './queries'

export default function ChallengePage() {
  const [isOpenDialog, setIsOpenDialog] = useState(false)

  const [tab, setTab] = useState<'inProgress' | 'completed'>('inProgress')

  const challengesQuery = useChallengesQuery()

  if (!challengesQuery.isSuccess) {
    return null
  }

  const challenges = challengesQuery.data.data

  const inProgressChallenges = challenges.filter((challenge) => challenge.challenge_status === 'PROGRESS')
  const completedChallenges = challenges.filter((challenge) => challenge.challenge_status === 'SUCCESS')

  const challengesByTab = tab === 'inProgress' ? inProgressChallenges : completedChallenges

  return (
    <div className='relative flex h-full max-h-full flex-col gap-4 px-6 pt-[88px]'>
      <div className='flex w-full'>
        <button
          className={cn('flex h-12 w-1/2 items-center justify-center border-b border-white font-semibold', {
            'border-b-[#595959] text-[#595959]': tab !== 'inProgress',
          })}
          onClick={() => {
            setTab('inProgress')
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
      <div className='flex flex-1 flex-col gap-3 overflow-y-auto pb-20'>
        {challengesByTab.map((challenge) => {
          return <ChallengeCard key={challenge.id} challenge={challenge} />
        })}
      </div>
      <ChallengeFormDialog isOpenDialog={isOpenDialog} setIsOpenDialog={setIsOpenDialog} />
    </div>
  )
}
