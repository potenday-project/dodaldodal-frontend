import { useMutation } from '@tanstack/react-query'

import { createChallenge } from '@/app/_service/challenge'

export const useCreateChallengeMutation = () => {
  return useMutation({
    mutationFn: createChallenge,
  })
}
