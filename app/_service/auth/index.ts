import axios from 'axios'

import api from '../core/api'

import { type GetTokenFromKakaoParams, type GetTokenFromKakaoResponse } from './auth.types'

export const getTokenByAuthorizationCode = async ({ code }: GetTokenFromKakaoParams) => {
  return await axios.get<GetTokenFromKakaoResponse>(`/oauth/callback/kakao/api?code=${code}`)
}

export const getUsers = () => {
  return api.get('/users')
}
