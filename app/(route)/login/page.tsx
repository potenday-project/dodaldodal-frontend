import Image from 'next/image'

import { KAKAO } from '@/app/_constants/kakao'

export default function Home() {
  return (
    <main className='flex h-full min-h-screen flex-col items-center justify-between bg-login-background bg-cover bg-center bg-no-repeat pb-24 pt-28'>
      <div className='flex flex-col items-center gap-5'>
        <Image src='/images/logo.png' width={155} height={155} alt='도달 로고' />
        <span>1:1 매칭 목표 달성 서비스</span>
      </div>
      <a
        className='flex h-11 w-[260px] items-center justify-center gap-1 rounded-xl bg-dodal-kakao p-4 text-black'
        href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO.REST_API_KEY}&redirect_uri=${KAKAO.REDIRECT_URI}`}
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='28' height='26' viewBox='0 0 28 26' fill='none'>
          <path
            d='M14.2321 3.4668C7.89336 3.4668 2.75488 7.27945 2.75488 11.9825C2.75488 15.0231 4.90311 17.6912 8.13461 19.1977C7.95881 19.7683 7.00487 22.8682 6.96691 23.1117C6.96691 23.1117 6.94407 23.2947 7.06998 23.3645C7.1959 23.4343 7.344 23.3801 7.344 23.3801C7.70509 23.3326 11.5313 20.8034 12.1936 20.3643C12.8552 20.4524 13.5364 20.4982 14.2321 20.4982C20.5708 20.4982 25.7093 16.6857 25.7093 11.9825C25.7093 7.27945 20.5708 3.4668 14.2321 3.4668Z'
            fill='black'
            fillOpacity='0.9'
          />
        </svg>
        <span>카카오로 시작하기</span>
      </a>
    </main>
  )
}
