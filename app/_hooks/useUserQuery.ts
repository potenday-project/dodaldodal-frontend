import { useQuery } from '@tanstack/react-query'

import { getUser } from '../_service/auth'

const QUERY_KEY = {
  USER: ['user'],
}

export const useUserQuery = () => {
  return useQuery({
    queryKey: QUERY_KEY.USER,
    queryFn: () => {
      return getUser()
    },
  })
}
