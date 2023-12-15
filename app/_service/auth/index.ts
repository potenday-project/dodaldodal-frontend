import axios from 'axios'

import api from '../core/api'

import {
  type LoginResponse,
  type GetTokenFromKakaoParams,
  type GetTokenFromKakaoResponse,
  type SignUpParams,
} from './auth.types'

export const getTokenByAuthorizationCode = async ({ code }: GetTokenFromKakaoParams) => {
  return await axios.get<GetTokenFromKakaoResponse>(`/oauth/callback/kakao/api?code=${code}`)
}

export const getUsers = () => {
  return api.get('/users')
}

export const login = ({ accessToken }: { accessToken: string }) => {
  return api.post<LoginResponse>('/users/signIn', { accessToken })
}

export const signUp = ({ accessToken, nickname, champion }: SignUpParams) => {
  return api.post('/users/signUp', { accessToken, nickname, champion })
}
