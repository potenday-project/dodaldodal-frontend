'use client'

import { useAxiosInterceptor } from '@/app/_hooks/useAxiosInterceptor'

import AxiosProvider from './AxiosInterceptorProvider'
import QueryClientProvider from './QueryClientProvider'

export default function CoreProvider({ children }: { children: React.ReactNode }) {
  useAxiosInterceptor()

  return (
    <AxiosProvider>
      <QueryClientProvider>{children}</QueryClientProvider>
    </AxiosProvider>
  )
}
