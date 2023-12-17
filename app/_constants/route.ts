export const ROUTE = {
  HOME: '/',
  LOGIN: '/login',
  SIGN_UP: '/sign-up',
  CHALLENGE: '/challenge',
  CHALLENGE_DETAIL: (id: number) => `/challenge/${id}`,
  ALARM: '/alarm',
  ME: '/me',
  BADGES: '/badges',
  OAUTH: {
    KAKAO: {
      CALLBACK: '/oauth/callback/kakao',
    },
  },
}
