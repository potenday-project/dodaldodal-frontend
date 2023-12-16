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
    mutationFn: ({ challengeCertificationId }: { challengeCertificationId: number }) => {
      return approveCertificationAlarm({ challengeCertificationId })
    },
  })
}

export const useRejectCertificationAlarmMutation = () => {
  return useMutation({
    mutationFn: ({ challengeCertificationId }: { challengeCertificationId: number }) => {
      return approveCertificationAlarm({ challengeCertificationId })
    },
  })
}
