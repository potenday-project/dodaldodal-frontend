import { useQuery } from '@tanstack/react-query'

import { getUserStatus } from '@/app/_service/auth'

const QUERY_KEY = {
  USER_STATUS: ['userStatus'],
}

export const useUserStatusQuery = () => {
  return useQuery({
    queryKey: QUERY_KEY.USER_STATUS,
    queryFn: () => {
      return getUserStatus()
    },
  })
}
