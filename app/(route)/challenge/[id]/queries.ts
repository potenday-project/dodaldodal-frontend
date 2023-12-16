import { useMutation } from '@tanstack/react-query'

import { submitCertification } from '@/app/_service/challenge'

export const useSubmitCertificationMutation = () => {
  return useMutation({
    mutationFn: submitCertification,
  })
}
