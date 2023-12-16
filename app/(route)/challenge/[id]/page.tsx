'use client'

import Image from 'next/image'

import { useState } from 'react'

import { CHAMPION } from '../../sign-up/page'

import CertificationDialog from './_components/certification-dialog'
import DodalStamp from './_components/dodal-stamp'
import Stamp from './_components/stamp'
import { useChallengeDetailQuery } from './queries'

const CATEGORY = {
  LIFE_STYLES: '생활습관',
  SELF_DEVELOPMENT: '자기계발',
  WORKOUT: '운동',
  STUDY: '스터디',
  ETC: '기타',
}

export default function ChallengeDetailPage({
  params,
}: {
  params: {
    id: number
  }
}) {
  const [isOpenCertificationDialog, setIsOpenCertificationDialog] = useState(false)
  const challengeDetailQuery = useChallengeDetailQuery({ challengeId: params.id })

  if (!challengeDetailQuery.isSuccess) {
    return null
  }

  const result = challengeDetailQuery.data.data

  const myChallengeStatus = result.myResult
  const otherChallengeStatus = result.otherResult

  return (
    <div className='flex-1 overflow-y-auto'>
      <div className='mx-10 flex flex-col justify-center border-b border-[#A6A6A6] pb-4'>
        <div className='flex justify-end text-[28px] font-extrabold text-[#D9D9D9]'>
          {(myChallengeStatus.certificationCount / 10) * 100}%
        </div>
        <div className='flex flex-col gap-[10px]'>
          <span className='h-4 w-fit rounded-[2px] bg-[#FFCD4B] px-1 text-[10px]'>
            {CATEGORY[myChallengeStatus.category]}
          </span>
          <div className='flex items-center justify-between'>
            <span className='text-[22px] font-semibold'>{myChallengeStatus.challengeName}</span>
            <CertificationDialog
              open={isOpenCertificationDialog}
              setOpen={setIsOpenCertificationDialog}
              challengeId={params.id}
            />
          </div>
          <div className='flex items-center gap-[10px]'>
            <div className='relative h-6 w-6 rounded-full bg-white'>
              <Image src={CHAMPION.DEFAULT[otherChallengeStatus.champion]} fill alt='' />
            </div>
            <div className='flex items-center'>
              <span className='text-xs text-[#FFFF8E]'>{otherChallengeStatus.nickname}</span>
              <span className='text-xs text-[#A6A6A6]'>님과 챌린지 중! · {otherChallengeStatus.reward}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='relative mx-auto max-w-[325px] pt-[70px]'>
        <Image
          src='https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/challenge_s.png'
          width={325}
          height={382}
          alt=''
        />
        <div className='absolute left-0 top-[26px] z-10 flex gap-[10px]'>
          <Stamp
            isActive={myChallengeStatus.certificationCount >= 1}
            champion={otherChallengeStatus.certificationCount === 1 ? otherChallengeStatus.champion : undefined}
          />
          <Stamp
            isActive={myChallengeStatus.certificationCount >= 2}
            champion={otherChallengeStatus.certificationCount === 2 ? otherChallengeStatus.champion : undefined}
          />
          <Stamp
            isActive={myChallengeStatus.certificationCount >= 3}
            champion={otherChallengeStatus.certificationCount === 3 ? otherChallengeStatus.champion : undefined}
          />
        </div>
        <div className='absolute left-[50px] top-[150px] z-10 flex gap-[10px]'>
          <Stamp
            isActive={myChallengeStatus.certificationCount >= 5}
            champion={otherChallengeStatus.certificationCount === 5 ? otherChallengeStatus.champion : undefined}
          />
          <Stamp
            isActive={myChallengeStatus.certificationCount >= 4}
            champion={otherChallengeStatus.certificationCount === 4 ? otherChallengeStatus.champion : undefined}
          />
        </div>
        <div className='absolute left-0 top-[280px] z-10 flex gap-[10px]'>
          <Stamp
            isActive={myChallengeStatus.certificationCount >= 6}
            champion={otherChallengeStatus.certificationCount === 6 ? otherChallengeStatus.champion : undefined}
          />
          <Stamp
            isActive={myChallengeStatus.certificationCount >= 7}
            champion={otherChallengeStatus.certificationCount === 7 ? otherChallengeStatus.champion : undefined}
          />
          <Stamp
            isActive={myChallengeStatus.certificationCount >= 8}
            champion={otherChallengeStatus.certificationCount === 8 ? otherChallengeStatus.champion : undefined}
          />
        </div>
        <div className='absolute left-[50px] top-[400px] z-10 flex gap-[10px]'>
          <DodalStamp
            isActive={myChallengeStatus.certificationCount >= 10}
            champion={otherChallengeStatus.certificationCount === 10 ? otherChallengeStatus.champion : undefined}
          />
          <Stamp
            isActive={myChallengeStatus.certificationCount >= 9}
            champion={otherChallengeStatus.certificationCount === 9 ? otherChallengeStatus.champion : undefined}
          />
        </div>
      </div>
    </div>
  )
}
