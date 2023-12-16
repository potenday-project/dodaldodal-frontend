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

export interface GetUpcomingChallengeParams {
  challengeId: number
}

export interface Challenge {
  id: number
  name: string
  category: Category
  authentication_method: string
  reward: string
  is_deleted: 0
  created_at: '2023-12-16T13:59:18.000Z'
  updated_at: '2023-12-16T13:59:18.000Z'
  target_count: 10
  challenge_status: 'WAITING'
}

export interface GetUpcomingChallengeResponse {
  challengeId: number
  name: string
  category: Category
  authenticationMethod: string
  reward: string
  champion: Champion
  explorationCount: number
  certificatedCount: number
}
