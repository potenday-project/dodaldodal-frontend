import { KAKAO } from '../_constants/kakao'

export default function Home() {
  return (
    <main>
      <span>Hello, World!</span>
      <a
        className='rounded-md bg-yellow-500 p-4 text-white'
        href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO.REST_API_KEY}&redirect_uri=${KAKAO.REDIRECT_URI}`}
      >
        카카오 로그인
      </a>
    </main>
  )
}
