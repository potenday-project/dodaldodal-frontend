'use client'

import { useSearchParams, useRouter } from 'next/navigation'

import { useEffect } from 'react'

import { useQuery } from '@tanstack/react-query'

import { ROUTE } from '@/app/_constants/route'
import { getTokenByAuthorizationCode } from '@/app/_service/auth'
import { setKakaoAccessToken } from '@/app/_utils/token'

import { QUERY_KEY } from './queries'

export default function KaKaoCallbackPage() {
  const router = useRouter()

  const searchParams = useSearchParams()
  const code = searchParams.get('code') as string

  const { isSuccess, data } = useQuery({
    queryKey: QUERY_KEY.KAKAO_TOKEN(code),
    queryFn: async () =>
      await getTokenByAuthorizationCode({
        code,
      }),
  })

  useEffect(() => {
    if (isSuccess) {
      setKakaoAccessToken(data.data.access_token)
      router.push(ROUTE.SIGN_UP)
    }
  }, [isSuccess])

  return null
}
