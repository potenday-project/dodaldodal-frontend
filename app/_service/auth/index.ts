import axios from 'axios'
import { GetTokenFromKakaoParams, GetTokenFromKakaoResponse } from './auth.types'

export const getTokenByAuthorizationCode = ({ code }: GetTokenFromKakaoParams) => {
  return axios.get<GetTokenFromKakaoResponse>(`/oauth/callback/kakao/api?code=${code}`)
}
