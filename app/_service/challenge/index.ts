import api from '../core/api'

import { type GetTodayStatus } from './challenge.types'

export const getTodayStatus = () => {
  return api.get<GetTodayStatus>('/challenges/today')
}
