export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL as string

export type AppEnv = 'production' | 'development'

const getAppEnv = (): AppEnv => (process.env.NEXT_PUBLIC_APP_ENV as Exclude<AppEnv, 'development'>) || 'development'

export const getApiEndpoint = () => {
  switch (getAppEnv()) {
    case 'production':
      return 'https://dodaldodal-frontend.vercel.app/api'
    case 'development':
      return 'http://localhost:4000/api'
    default:
      return 'http://localhost:4000/api'
  }
}
