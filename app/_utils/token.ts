const KAKAO_ACCESS_TOKEN = 'KAT'

const DODAL_TOKEN = 'DODAL_TOKEN'

export const getKakaoAccessToken = () => {
  return sessionStorage.getItem(KAKAO_ACCESS_TOKEN)
}

export const setKakaoAccessToken = (token: string) => {
  sessionStorage.setItem(KAKAO_ACCESS_TOKEN, token)
}

export const removeKakaoAccessToken = () => {
  sessionStorage.removeItem(KAKAO_ACCESS_TOKEN)
}

export const getAccessToken = () => {
  return localStorage.getItem(DODAL_TOKEN)
}

export const setAccessToken = (token: string) => {
  localStorage.setItem(DODAL_TOKEN, token)
}

export const removeAccessToken = () => {
  localStorage.removeItem(DODAL_TOKEN)
}
