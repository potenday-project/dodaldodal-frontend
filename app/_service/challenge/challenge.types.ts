import { type Champion } from '../auth/auth.types'

export interface GetTodayStatus {
  champion: Champion
  explorationCount: number
  certificatedCount: number
}
