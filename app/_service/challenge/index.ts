import api from '../core/api'

import { type CreateChallengeResponse, type CreateChallengeParams, type GetTodayStatus } from './challenge.types'

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
