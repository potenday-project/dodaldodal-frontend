'use client'

import { type PropsWithChildren, useState } from 'react'

import { QueryClient, QueryClientProvider as TanstackQueryProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function QueryClientProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
            retry: false,
          },
        },
      })
  )

  return (
    <TanstackQueryProvider client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </TanstackQueryProvider>
  )
}
