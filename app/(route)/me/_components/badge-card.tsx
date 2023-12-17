import Image from 'next/image'

interface BadgeCardProps {
  imageUrl: string
  title: string
  description: string
}

export default function BadgeCard({ imageUrl, title, description }: BadgeCardProps) {
  return (
    <div className='flex w-[144px] flex-col items-center gap-2 rounded-xl bg-white px-2 py-4'>
      <Image className='rounded-[10px] bg-[#DEDEDE]' src={imageUrl} width={90} height={80} alt='' />
      <div className='flex flex-col justify-center'>
        <span className='text-center text-sm font-semibold text-[#140A29]'>{title}</span>
        <span className='text-center text-xs text-[#848484]'>{description}</span>
      </div>
    </div>
  )
}
