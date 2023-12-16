import { useMutation, useQuery } from '@tanstack/react-query'

import { approveChallenge, getUpcomingChallenge } from '@/app/_service/challenge'

const QUERY_KEY = {
  UPCOMING_CHALLENGE: (challengeId: number) => ['upcomingChallenge', challengeId],
}

export const useUpcomingChallengeQuery = ({ challengeId }: { challengeId: number }) => {
  return useQuery({
    queryKey: QUERY_KEY.UPCOMING_CHALLENGE(challengeId),
    queryFn: () => {
      return getUpcomingChallenge({ challengeId })
    },
  })
}

export const useApproveChallengeMutation = () => {
  return useMutation({
    mutationFn: approveChallenge,
  })
}
