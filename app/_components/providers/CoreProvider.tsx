'use client'

import { useAxiosInterceptor } from '@/app/_hooks/useAxiosInterceptor'

import AxiosProvider from './AxiosInterceptorProvider'
import QueryClientProvider from './QueryClientProvider'
import { UserContextProvider } from './UserProvider'

export default function CoreProvider({ children }: { children: React.ReactNode }) {
  useAxiosInterceptor()

  return (
    <AxiosProvider>
      <QueryClientProvider>
        <UserContextProvider>{children}</UserContextProvider>
      </QueryClientProvider>
    </AxiosProvider>
  )
}
