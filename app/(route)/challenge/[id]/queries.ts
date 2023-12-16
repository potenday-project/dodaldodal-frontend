import { useMutation, useQuery } from '@tanstack/react-query'

import { getChallengeDetail, submitCertification } from '@/app/_service/challenge'

const QUERY_KEY = {
  CHALLENGE_DETAIL: (id: number) => ['challengeDetail', id],
}

export const useSubmitCertificationMutation = () => {
  return useMutation({
    mutationFn: submitCertification,
  })
}

export const useChallengeDetailQuery = ({ challengeId }: { challengeId: number }) => {
  return useQuery({
    queryKey: QUERY_KEY.CHALLENGE_DETAIL(challengeId),
    queryFn: () => {
      return getChallengeDetail({ challengeId })
    },
  })
}
