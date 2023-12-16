import AlertIcon from '@/app/_components/icons/AlertIcon'
import { type Alarm } from '@/app/_service/alarm/alarm.types'

interface ReRequestAlarmProps {
  alarm: Alarm
}

export default function ReRequestAlarm({ alarm }: ReRequestAlarmProps) {
  return (
    <div className='flex flex-col gap-3 rounded-xl bg-[#D9D9D9] p-4'>
      <div className='flex items-center gap-2 px-3'>
        <AlertIcon />
        <span className='text-[#595959]'>
          <strong className='text-[#482BD9]'>{alarm.name}</strong> 인증 요청이 도착했어요!
        </span>
      </div>
    </div>
  )
}
