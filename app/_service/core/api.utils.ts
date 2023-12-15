export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL as string

export type AppEnv = 'production' | 'development'

const getAppEnv = (): AppEnv => (process.env.NEXT_PUBLIC_APP_ENV as Exclude<AppEnv, 'development'>) || 'development'

export const getApiEndpoint = () => {
  switch (getAppEnv()) {
    case 'production':
      return SERVER_URL + '/api'
    case 'development':
      return SERVER_URL + '/api'
    default:
      return SERVER_URL + '/api'
  }
}
