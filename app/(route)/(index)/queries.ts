import { useQuery } from '@tanstack/react-query'

import { getTodayStatus } from '@/app/_service/challenge'

const QUERY_KEY = {
  todayStatus: ['todayStatus'],
}

export const useTodayStatusQuery = () => {
  return useQuery({
    queryKey: QUERY_KEY.todayStatus,
    queryFn: () => getTodayStatus(),
  })
}
