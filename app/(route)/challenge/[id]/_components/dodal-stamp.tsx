import Image from 'next/image'

import { type Champion } from '@/app/_service/auth/auth.types'

export default function DodalStamp({ isActive, champion }: { isActive: boolean; champion?: Champion }) {
  if (isActive) {
    return (
      <div className='relative'>
        <Image
          src='https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/dodal_stamp_active.png'
          width={88}
          height={88}
          alt=''
        />
        {champion && (
          <Image
            className='absolute bottom-0 right-0 rounded-full bg-white'
            src={champion}
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
        src='https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/dodal_stamp_unactive.png'
        width={88}
        height={88}
        alt=''
      />
      {champion && (
        <Image
          className='absolute bottom-0 right-0 rounded-full bg-white'
          src={champion}
          width={32}
          height={32}
          alt=''
        />
      )}
    </div>
  )
}
