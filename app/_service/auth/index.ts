import axios from 'axios'

import { type User } from '@/app/_types/user'

import api from '../core/api'

import {
  type LoginResponse,
  type GetTokenFromKakaoParams,
  type GetTokenFromKakaoResponse,
  type SignUpParams,
  type UserStatus,
} from './auth.types'

export const getTokenByAuthorizationCode = async ({ code }: GetTokenFromKakaoParams) => {
  return await axios.get<GetTokenFromKakaoResponse>(`/oauth/callback/kakao/api?code=${code}`)
}

export const getUser = () => {
  return api.get<User>('/users')
}

export const login = ({ accessToken }: { accessToken: string }) => {
  return api.post<LoginResponse>('/users/signIn', { accessToken })
}

export const signUp = ({ accessToken, nickname, champion }: SignUpParams) => {
  return api.post('/users/signUp', { accessToken, nickname, champion })
}

export const getUserStatus = () => {
  return api.get<UserStatus>('/users/status')
}
