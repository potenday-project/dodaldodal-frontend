export default function HomePage() {
  return (
    <div className='px-8 py-4'>
      <h1 className='text-2xl'>오늘의 도달률</h1>
      <div className='h-fit'>
        <span className='text-[88px] font-extrabold text-[#8A72FF]'>100</span>
        <span className='text-[40px] font-extrabold'>%</span>
      </div>
      <div className='text-xl'>🌙 탐사 필요 0</div>
      <div className='mt-3 text-xl'>🌕 탐사 완료 5</div>
    </div>
  )
}
