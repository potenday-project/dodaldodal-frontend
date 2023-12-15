import { useAxiosInterceptor } from '@/app/_hooks/useAxiosInterceptor'

interface Props {
  children: React.ReactNode
}

const AxiosProvider = ({ children }: Props) => {
  useAxiosInterceptor()

  return <>{children}</>
}

export default AxiosProvider
