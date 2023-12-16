export interface GetTokenFromKakaoParams {
  code: string
}

export interface GetTokenFromKakaoResponse {
  access_token: string
  expires_in: number
  refresh_token: string
  refresh_token_expires_in: number
  token_type: string
}

export interface LoginResponse {
  token: string
}

export type Champion = 'RED' | 'YELLOW' | 'GREEN' | 'BLUE' | 'BEIGE' | 'PINK'

export interface SignUpParams {
  accessToken: string
  nickname: string
  champion: Champion
}

export interface UserStatus {
  completedCount: number
  friendCount: number
  startedCount: number
}
