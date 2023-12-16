'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { ROUTE } from '@/app/_constants/route'
import { useUserQuery } from '@/app/_hooks/useUserQuery'

import { useApproveChallengeMutation, useUpcomingChallengeQuery } from './queries'

export default function InvitationPage({
  params,
}: {
  params: {
    id: string
  }
}) {
  const router = useRouter()
  const userQuery = useUserQuery()

  const upcomingChallengeQuery = useUpcomingChallengeQuery({
    challengeId: Number(params.id),
  })

  const approveChallengeMutation = useApproveChallengeMutation()

  return (
    <div className='flex min-h-[100dvh] flex-col items-center justify-center overflow-y-auto'>
      <div className='relative aspect-[323/208] w-[323px]'>
        <Image src='https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/dodals.png' fill alt='' />
      </div>
      <div className='mt-8 flex flex-col justify-center'>
        <div className='text-center'>
          <span className='text-lg text-[#8A72FF]'>{upcomingChallengeQuery.data?.data.nickname}</span>
          <span className='text-lg'>님이 초대장을 보냈어요</span>
        </div>
        <span className='text-center text-lg'>목표를 위해 함께 달려볼까요?</span>
      </div>
      <div className='mt-20 flex w-full flex-col items-center gap-3'>
        <button
          className='h-[56px] w-full max-w-[326px] rounded-[50px] bg-[#482BD9] text-lg font-bold'
          onClick={() => {
            approveChallengeMutation.mutate(
              {
                challengeId: Number(params.id),
              },
              {
                onSuccess: () => {
                  router.push(userQuery.isSuccess ? ROUTE.CHALLENGE : ROUTE.LOGIN)
                },
              }
            )
          }}
        >
          좋아요!
        </button>
        <button className='h-[56px] w-full max-w-[326px] rounded-[50px] bg-[#595959] text-lg font-semibold'>
          아니요, 괜찮아요
        </button>
      </div>
    </div>
  )
}
