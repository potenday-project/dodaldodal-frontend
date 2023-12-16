import api from '../core/api'

import {
  type CreateChallengeResponse,
  type CreateChallengeParams,
  type GetTodayStatus,
  type GetUpcomingChallengeParams,
  type GetUpcomingChallengeResponse,
  type GetChallengesResponse,
} from './challenge.types'

export const getTodayStatus = () => {
  return api.get<GetTodayStatus>('/challenges/today')
}

export const createChallenge = ({ name, category, authenticationMethod, reward }: CreateChallengeParams) => {
  return api.post<CreateChallengeResponse>('/challenges', {
    name,
    category,
    authenticationMethod,
    reward,
  })
}

export const getUpcomingChallenge = ({ challengeId }: GetUpcomingChallengeParams) => {
  return api.get<GetUpcomingChallengeResponse>(`/challenges/upcoming/${challengeId}`)
}

export const approveChallenge = ({ challengeId }: { challengeId: number }) => {
  return api.post(`/challenges/approve`, {
    challengeId,
  })
}

export const getChallenges = () => {
  return api.get<GetChallengesResponse>('/challenges')
}
