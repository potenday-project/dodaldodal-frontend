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