import Image from 'next/image'

import { CHAMPION } from '@/app/(route)/sign-up/page'
import { type Champion } from '@/app/_service/auth/auth.types'

export default function Stamp({ isActive, champion }: { isActive: boolean; champion?: Champion }) {
  if (isActive) {
    return (
      <div className='relative'>
        <Image
          src='https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/stamp_active.png'
          width={88}
          height={88}
          alt=''
        />
        {champion && (
          <Image
            className='absolute bottom-0 right-0 rounded-full bg-white'
            src={CHAMPION.DEFAULT[champion]}
            width={32}
            height={32}
            alt=''
          />
        )}
      </div>
    )
  }

  return (
    <div className='relative'>
      <Image
        src='https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/stamp_unactive.png'
        width={88}
        height={88}
        alt=''
      />
      {champion && (
        <Image
          className='absolute bottom-0 right-0 rounded-full bg-white'
          src={CHAMPION.DEFAULT[champion]}
          width={32}
          height={32}
          alt=''
        />
      )}
    </div>
  )
}
