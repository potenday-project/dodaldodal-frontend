'use client'

import { useSearchParams, useRouter } from 'next/navigation'

import { useEffect } from 'react'

import { useQuery } from '@tanstack/react-query'

import { ROUTE } from '@/app/_constants/route'
import { getTokenByAuthorizationCode } from '@/app/_service/auth'

import { QUERY_KEY } from './queries'

export default function KaKaoCallbackPage() {
  const router = useRouter()

  const searchParams = useSearchParams()
  const code = searchParams.get('code')

  const { isSuccess, data } = useQuery({
    queryKey: QUERY_KEY.KAKAO_TOKEN(code as string),
    queryFn: async () =>
      await getTokenByAuthorizationCode({
        code: code as string,
      }),
    enabled: code !== null,
  })

  useEffect(() => {
    if (isSuccess) {
      router.push(ROUTE.HOME)
    }
  }, [isSuccess])

  if (!isSuccess) {
    return null
  }

  return (
    <div>
      <span>{code}</span>
      <span>{data.data.access_token}</span>
    </div>
  )
}
