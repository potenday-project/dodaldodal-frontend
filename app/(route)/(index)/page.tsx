import Image from 'next/image'

export default function HomePage() {
  return (
    <div className='relative h-full px-8 py-4 pt-16'>
      <h1 className='text-2xl'>오늘의 도달률</h1>
      <div className='mb-7 flex items-end'>
        <div className='h-[88px] text-[88px] font-extrabold leading-[88px] text-[#8A72FF]'>100</div>
        <span className='text-[40px] font-extrabold'>%</span>
      </div>
      <div className='text-xl'>🌙 탐사 필요 0</div>
      <div className='mt-3 text-xl'>🌕 탐사 완료 5</div>

      <div className='absolute bottom-[7%] right-2'>
        <div className='relative aspect-[297/529] h-[50vh] w-full'>
          <Image src='/images/RED1.png' fill alt='' />
        </div>
      </div>
    </div>
  )
}
