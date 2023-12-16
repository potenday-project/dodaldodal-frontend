import { useMutation, useQuery } from '@tanstack/react-query'

import { createChallenge, getChallenges } from '@/app/_service/challenge'

const QUERY_KEY = {
  challenges: ['challenges'],
}

export const useCreateChallengeMutation = () => {
  return useMutation({
    mutationFn: createChallenge,
  })
}

export const useChallengesQuery = () => {
  return useQuery({
    queryKey: QUERY_KEY.challenges,
    queryFn: getChallenges,
  })
}
