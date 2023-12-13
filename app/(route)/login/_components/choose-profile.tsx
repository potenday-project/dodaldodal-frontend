'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'

import { ROUTE } from '@/app/_constants/route'

type Profile = 'red' | 'yellow' | 'green' | 'blue' | 'beige' | 'pink'

export default function ChooseProfile() {
  const [selectedProfile, setSelectedProfile] = useState<Profile>('red')

  const profiles = {
    default: {
      red: '/images/profile-red-1.png',
      yellow: '/images/profile-yellow-1.png',
      green: '/images/profile-green-1.png',
      blue: '/images/profile-blue-1.png',
      beige: '/images/profile-beige-1.png',
      pink: '/images/profile-pink-1.png',
    },
    selected: {
      red: '/images/profile-red-1-selected.png',
      yellow: '/images/profile-yellow-1-selected.png',
      green: '/images/profile-green-1-selected.png',
      blue: '/images/profile-blue-1-selected.png',
      beige: '/images/profile-beige-1-selected.png',
      pink: '/images/profile-pink-1-selected.png',
    },
  }

  return (
    <main className='flex h-full flex-col items-center px-6 pb-16 pt-11'>
      <h1 className='text-2xl font-semibold'>프로필 생성</h1>
      <div className='flex w-full flex-col gap-6'>
        <div className='mt-10 flex flex-col items-center'>
          <Image
            className='rounded-full bg-white'
            src={profiles.default[selectedProfile]}
            width={187}
            height={187}
            alt=''
          />
          <div className='mt-3 flex flex-col items-center gap-1'>
            <input className='mb-1 w-[84px] appearance-none border-0 border-b border-b-[#B8B8B8] bg-transparent p-0 text-center text-xl focus:ring-0' />
            <span className='text-xs'>0/4</span>
          </div>
        </div>
        <div className='mx-auto grid w-fit grid-cols-3 gap-x-3 gap-y-4'>
          {Object.keys(profiles.default).map((profile) => (
            <button
              key={profile}
              onClick={() => {
                setSelectedProfile(profile as Profile)
              }}
            >
              <Image
                className='rounded-full bg-white'
                src={
                  selectedProfile === profile
                    ? profiles.selected[profile as Profile]
                    : profiles.default[profile as Profile]
                }
                width={80}
                height={80}
                alt=''
              />
            </button>
          ))}
        </div>
        <Link
          className='mt-28 flex h-14 w-full items-center justify-center rounded-[50px] bg-[#482BD9]'
          href={ROUTE.HOME}
        >
          달 탐사 시작하기
        </Link>
      </div>
    </main>
  )
}
