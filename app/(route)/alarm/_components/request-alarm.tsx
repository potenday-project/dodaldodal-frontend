'use client'

import Image from 'next/image'

import { useQueryClient } from '@tanstack/react-query'

import { type Alarm } from '@/app/_service/alarm/alarm.types'

import { QUERY_KEY, useApproveCertificationAlarmMutation, useRejectCertificationAlarmMutation } from '../queries'

interface RequestAlarmProps {
  alarm: Alarm
}

export default function RequestAlarm({ alarm }: RequestAlarmProps) {
  const approveCertificationAlarmMutation = useApproveCertificationAlarmMutation()
  const rejectCertificationAlarmMutation = useRejectCertificationAlarmMutation()

  const queryClient = useQueryClient()

  return (
    <div className='flex flex-col gap-3 rounded-xl bg-[#D9D9D9] p-4'>
      <div className='flex items-center gap-2 px-3'>
        <svg xmlns='http://www.w3.org/2000/svg' width='17' height='16' viewBox='0 0 17 16' fill='none'>
          <circle cx='8.5' cy='8' r='8' fill='#482BD9' />
          <path
            d='M12.3167 4.84038C12.2638 4.78536 12.2009 4.74169 12.1315 4.71189C12.0621 4.68209 11.9877 4.66675 11.9126 4.66675C11.8374 4.66675 11.763 4.68209 11.6937 4.71189C11.6243 4.74169 11.5613 4.78536 11.5084 4.84038L7.2676 9.21934L5.48588 7.37619C5.43093 7.32146 5.36607 7.27842 5.295 7.24954C5.22393 7.22066 5.14804 7.20649 5.07166 7.20786C4.99527 7.20922 4.9199 7.22608 4.84984 7.25748C4.77978 7.28888 4.7164 7.3342 4.66333 7.39086C4.61025 7.44752 4.56852 7.5144 4.54051 7.58769C4.5125 7.66098 4.49877 7.73924 4.50009 7.818C4.50141 7.89677 4.51776 7.97449 4.54821 8.04674C4.57866 8.11898 4.62261 8.18434 4.67756 8.23907L6.86344 10.4931C6.91635 10.5481 6.97931 10.5918 7.04868 10.6216C7.11805 10.6514 7.19245 10.6667 7.2676 10.6667C7.34274 10.6667 7.41714 10.6514 7.48651 10.6216C7.55588 10.5918 7.61884 10.5481 7.67175 10.4931L12.3167 5.70326C12.3745 5.64829 12.4206 5.58158 12.4522 5.50732C12.4837 5.43307 12.5 5.35288 12.5 5.27182C12.5 5.19075 12.4837 5.11057 12.4522 5.03631C12.4206 4.96206 12.3745 4.89535 12.3167 4.84038Z'
            fill='white'
          />
        </svg>
        <span className='text-[#595959]'>
          <strong className='text-[#482BD9]'>{alarm.name}</strong> 인증 요청이 도착했어요!
        </span>
      </div>
      <div className=''>
        <div className='relative aspect-square w-full'>
          <Image className='rounded-lg object-cover' src={alarm.authenticateImageUrl} fill alt='' />
        </div>
      </div>
      <div className='flex gap-2 '>
        <button
          className='h-11 w-full rounded-lg bg-[#A6A6A6] text-sm font-semibold'
          onClick={() => {
            approveCertificationAlarmMutation.mutate(
              {
                memberId: alarm.member_id,
                challengeCertificationId: alarm.challenge_certification_id,
              },
              {
                onSuccess: () => {
                  return queryClient.invalidateQueries({
                    queryKey: QUERY_KEY.ALARM,
                  })
                },
              }
            )
          }}
        >
          다시 찍어줘!
        </button>
        <button
          className='h-11 w-full rounded-lg bg-[#482BD9] text-sm font-semibold'
          onClick={() => {
            rejectCertificationAlarmMutation.mutate(
              {
                memberId: alarm.member_id,
                challengeCertificationId: alarm.challenge_certification_id,
              },
              {
                onSuccess: () => {
                  return queryClient.invalidateQueries({
                    queryKey: QUERY_KEY.ALARM,
                  })
                },
              }
            )
          }}
        >
          잘했어!
        </button>
      </div>
    </div>
  )
}
