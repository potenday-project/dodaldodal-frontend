import { useQuery } from '@tanstack/react-query'

import { getChallenges } from '@/app/_service/challenge'

const QUERY_KEY = {
  challenges: ['challenges'],
}

export const useChallengesQuery = () => {
  return useQuery({
    queryKey: QUERY_KEY.challenges,
    queryFn: () => getChallenges(),
  })
}
