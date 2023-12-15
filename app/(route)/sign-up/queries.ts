import { useMutation, useQuery } from '@tanstack/react-query'
import { type AxiosError } from 'axios'

import { login, signUp } from '@/app/_service/auth'
import { type Champion, type LoginResponse } from '@/app/_service/auth/auth.types'
import { type ServerError, type ServerResponse } from '@/app/_service/core/api.types'

const QUERY_KEY = {
  LOGIN: (accessToken: string) => ['login', accessToken],
}

export const useLoginQuery = ({ accessToken }: { accessToken: string }) => {
  return useQuery<ServerResponse<LoginResponse>, AxiosError<ServerError>>({
    queryKey: QUERY_KEY.LOGIN(accessToken),
    queryFn: () => {
      return login({ accessToken })
    },
    enabled: Boolean(accessToken),
  })
}

export const useSignUpMutation = () => {
  return useMutation({
    mutationFn: ({
      accessToken,
      nickname,
      champion,
    }: {
      accessToken: string
      nickname: string
      champion: Champion
    }) => {
      return signUp({ accessToken, nickname, champion })
    },
  })
}
