import { type Champion } from '../_service/auth/auth.types'

export interface User {
  id: number
  nickname: string
  provider: 'KAKAO' | 'GOOGLE'
  provider_id: string
  champion: Champion
}
