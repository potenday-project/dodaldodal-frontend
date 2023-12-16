import { type Champion } from '../auth/auth.types'

export interface GetTodayStatus {
  champion: Champion
  explorationCount: number
  certificatedCount: number
}

export type Category = 'LIFE_STYLES' | 'SELF_DEVELOPMENT' | 'STUDY' | 'WORKOUT' | 'ETC'

export interface CreateChallengeParams {
  name: string
  category: Category
  authenticationMethod: string
  reward: string
}

export interface CreateChallengeResponse {
  challengeId: number
}
