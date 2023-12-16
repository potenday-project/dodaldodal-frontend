import Image from 'next/image'

export default function BadgeCard() {
  return (
    <div className='flex w-[144px] flex-col items-center gap-2 rounded-xl bg-white px-2 py-4'>
      <Image
        className='rounded-[10px] bg-[#DEDEDE]'
        src='https://dodals3.s3.ap-northeast-2.amazonaws.com/asset/profile_red.png'
        width={90}
        height={80}
        alt=''
      />
      <div className='flex flex-col justify-center'>
        <span className='text-center text-sm font-semibold text-[#140A29]'>탐사 자격증 보유자</span>
        <span className='text-center text-xs text-[#848484]'>도달 여행을 시작했어요</span>
      </div>
    </div>
  )
}
