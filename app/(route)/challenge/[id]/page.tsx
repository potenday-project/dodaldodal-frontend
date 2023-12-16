'use client'

import Image from 'next/image'

import { useState } from 'react'

import CertificationDialog from './_components/certification-dialog'
import { useChallengeDetailQuery } from './queries'

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

  console.log(result)

  return (
    <div className='flex-1 overflow-y-auto'>
      <div className='mx-10 flex flex-col justify-center border-b border-[#A6A6A6] pb-4'>
        <div className='flex justify-end text-[28px] font-extrabold text-[#D9D9D9]'>0%</div>
        <div className='flex flex-col gap-[10px]'>
          <span className='h-4 w-fit rounded-[2px] bg-[#FFCD4B] px-1 text-[10px]'>운동</span>
          <div className='flex items-center justify-between'>
            <span className='text-[22px] font-semibold'>하루 스쿼트 100개</span>
            <CertificationDialog
              open={isOpenCertificationDialog}
              setOpen={setIsOpenCertificationDialog}
              challengeId={params.id}
            />
          </div>
          <div className='flex items-center gap-[10px]'>
            <div className='relative h-6 w-6 rounded-full bg-white'>
              <Image src='https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/red.png' fill alt='' />
            </div>
            <div className='flex items-center'>
              <span className='text-xs text-[#FFFF8E]'>은하수</span>
              <span className='text-xs text-[#A6A6A6]'>님과 챌린지 중! · 헬스장 1개월 이용권</span>
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
          <Image
            src='https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/stamp_unactive.png'
            width={88}
            height={88}
            alt=''
          />
          <Image
            src='https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/stamp_unactive.png'
            width={88}
            height={88}
            alt=''
          />
          <Image
            src='https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/stamp_unactive.png'
            width={88}
            height={88}
            alt=''
          />
        </div>
        <div className='absolute left-[50px] top-[150px] z-10 flex gap-[10px]'>
          <Image
            src='https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/stamp_unactive.png'
            width={88}
            height={88}
            alt=''
          />
          <Image
            src='https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/stamp_unactive.png'
            width={88}
            height={88}
            alt=''
          />
        </div>
        <div className='absolute left-0 top-[280px] z-10 flex gap-[10px]'>
          <Image
            src='https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/stamp_unactive.png'
            width={88}
            height={88}
            alt=''
          />
          <Image
            src='https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/stamp_unactive.png'
            width={88}
            height={88}
            alt=''
          />
          <Image
            src='https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/stamp_unactive.png'
            width={88}
            height={88}
            alt=''
          />
        </div>
        <div className='absolute left-[50px] top-[400px] z-10 flex gap-[10px]'>
          <Image
            src='https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/stamp_unactive.png'
            width={88}
            height={88}
            alt=''
          />
          <Image
            src='https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/stamp_unactive.png'
            width={88}
            height={88}
            alt=''
          />
        </div>
      </div>
    </div>
  )
}
