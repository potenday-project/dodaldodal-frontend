'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { useEffect, useState } from 'react'

import { useForm, type SubmitHandler } from 'react-hook-form'

import { ROUTE } from '@/app/_constants/route'
import { type Champion } from '@/app/_service/auth/auth.types'
import { getKakaoAccessToken, removeKakaoAccessToken, setAccessToken } from '@/app/_utils/token'

import { useLoginQuery, useSignUpMutation } from './queries'

const CHAMPION = {
  DEFAULT: {
    RED: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/profile_red.png',
    YELLOW: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/profile_yellow.png',
    GREEN: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/profile_green.png',
    BLUE: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/profile_blue.png',
    BEIGE: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/profile_beige.png',
    PINK: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/profile_pink.png',
  },
  SELECTED: {
    RED: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/selected_profile_red.png',
    YELLOW: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/selected_profile_yellow.png',
    GREEN: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/selected_profile_green.png',
    BLUE: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/selected_profile_blue.png',
    BEIGE: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/selected_profile_beige.png',
    PINK: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/selected_profile_pink.png',
  },
}

interface Inputs {
  nickname: string
}

export default function SignUp() {
  const router = useRouter()

  const [selectedChampion, setSelectedChampion] = useState<Champion>('RED')

  const { register, handleSubmit, watch } = useForm<Inputs>({
    mode: 'onChange',
    defaultValues: {
      nickname: '',
    },
  })

  const loginQuery = useLoginQuery({ accessToken: getKakaoAccessToken() })
  const signUpMutation = useSignUpMutation()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    signUpMutation.mutate(
      {
        accessToken: getKakaoAccessToken(),
        nickname: data.nickname,
        champion: selectedChampion,
      },
      {
        onSuccess: async () => {
          const { data } = await loginQuery.refetch()

          removeKakaoAccessToken()
          setAccessToken(data?.data.token)

          router.push(ROUTE.HOME)
        },
      }
    )
  }
  const errorMessage = loginQuery.error?.response?.data.message
  const invalidKakaoToken = errorMessage === '카카오 access 토큰이 유효하지 않습니다.'
  const isNeedToRegister =
    errorMessage === 'provider_id가 DB에 없어 회원가입 필요, JWT토큰 생성 불가. 요청에 실패했습니다.'

  useEffect(() => {
    if (invalidKakaoToken) {
      alert('카카오 로그인이 만료되었습니다. 다시 로그인해주세요.')

      router.push(ROUTE.LOGIN)
    }
  }, [loginQuery.isError, invalidKakaoToken])

  useEffect(() => {
    if (loginQuery.isSuccess) {
      setAccessToken(loginQuery.data.data.token)
      removeKakaoAccessToken()

      router.push(ROUTE.HOME)
    }
  }, [loginQuery.isSuccess])

  if (invalidKakaoToken || !isNeedToRegister) {
    return null
  }

  return (
    <main className='flex h-full flex-col items-center px-6 pb-16 pt-11'>
      <h1 className='text-2xl font-semibold'>프로필 생성</h1>
      <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex w-full flex-col gap-6'>
          <div className='mt-10 flex flex-col items-center'>
            <Image
              className='rounded-full bg-white'
              src={CHAMPION.DEFAULT[selectedChampion]}
              width={187}
              height={187}
              alt=''
            />

            <div className='mt-3 flex flex-col items-center gap-1'>
              <input
                className='mb-1 w-[84px] appearance-none border-0 border-b border-b-[#B8B8B8] bg-transparent p-0 text-center text-xl focus:ring-0'
                maxLength={4}
                defaultValue=''
                {...register('nickname', {
                  required: true,
                  maxLength: 4,
                  pattern: /^[가-힣a-zA-Z0-9]*$/,
                  onChange: (e) => {
                    e.target.value = e.target.value.slice(0, 4)
                  },
                })}
              />
              <span className='text-xs'>{watch('nickname').length >= 4 ? 4 : watch('nickname').length ?? 0} / 4</span>
            </div>
          </div>
          <div className='mx-auto grid w-fit grid-cols-3 gap-x-3 gap-y-4'>
            {Object.keys(CHAMPION.DEFAULT).map((champion) => (
              <button
                key={champion}
                type='button'
                onClick={() => {
                  setSelectedChampion(champion as Champion)
                }}
              >
                <Image
                  className='rounded-full bg-white'
                  src={
                    selectedChampion === champion
                      ? CHAMPION.SELECTED[champion as Champion]
                      : CHAMPION.DEFAULT[champion as Champion]
                  }
                  width={80}
                  height={80}
                  alt=''
                />
              </button>
            ))}
          </div>
          <button
            className='mt-28 flex h-14 w-full items-center justify-center rounded-[50px] bg-[#482BD9]'
            type='submit'
          >
            달 탐사 시작하기
          </button>
        </div>
      </form>
    </main>
  )
}
