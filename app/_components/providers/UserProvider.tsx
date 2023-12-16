'use client'

import { usePathname, useRouter } from 'next/navigation'

import { createContext, useContext, useEffect } from 'react'

import { useQuery } from '@tanstack/react-query'

import { ROUTE } from '@/app/_constants/route'
import { getUser } from '@/app/_service/auth'
import { type User } from '@/app/_types/user'

interface UserContextType {
  user: User
}

export const UserContext = createContext<UserContextType | null>(null)

export const useUserContext = () => {
  const userContext = useContext(UserContext)

  if (userContext === null || userContext === undefined) {
    throw new Error('UserContext: No value provided.')
  }

  return userContext
}

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const router = useRouter()

  const userQuery = useQuery({
    queryKey: ['user'],
    queryFn: () => {
      return getUser()
    },
  })

  useEffect(() => {
    const isPublicPath =
      pathname === ROUTE.LOGIN ||
      pathname === ROUTE.SIGN_UP ||
      pathname === ROUTE.OAUTH.KAKAO.CALLBACK ||
      pathname.includes('/invitation')

    if (userQuery.isError && !isPublicPath) {
      router.push(ROUTE.LOGIN)
    }
  }, [userQuery.isError, pathname])

  if (!userQuery.isSuccess) {
    return null
  }

  return <UserContext.Provider value={{ user: userQuery.data.data }}>{children}</UserContext.Provider>
}
