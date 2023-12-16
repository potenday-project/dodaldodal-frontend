import { useMutation, useQuery } from '@tanstack/react-query'

import { approveCertificationAlarm, getAlarms } from '@/app/_service/alarm'

export const QUERY_KEY = {
  ALARM: ['alarm'],
}

export const useAlarmQuery = () => {
  return useQuery({
    queryKey: QUERY_KEY.ALARM,
    queryFn: () => {
      return getAlarms()
    },
  })
}

export const useApproveCertificationAlarmMutation = () => {
  return useMutation({
    mutationFn: ({ memberId, challengeCertificationId }: { memberId: number; challengeCertificationId: number }) => {
      return approveCertificationAlarm({
        memberId,
        challengeCertificationId,
      })
    },
  })
}

export const useRejectCertificationAlarmMutation = () => {
  return useMutation({
    mutationFn: ({ memberId, challengeCertificationId }: { memberId: number; challengeCertificationId: number }) => {
      return approveCertificationAlarm({ memberId, challengeCertificationId })
    },
  })
}
