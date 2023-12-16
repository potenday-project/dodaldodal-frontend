'use client'

import { UserContextProvider } from '@/app/_components/providers/UserProvider'

import BackButton from './_components/BackButton'
import ReRequestAlarm from './_components/re-request-alarm'
import RequestAlarm from './_components/request-alarm'
import SuccessAlarm from './_components/success-alarm'
import { useAlarmQuery } from './queries'

export default function AlarmPage() {
  const alarmQuery = useAlarmQuery()

  if (!alarmQuery.isSuccess) {
    return null
  }

  return (
    <UserContextProvider>
      <main className='flex flex-col gap-3'>
        <header className='flex items-center justify-between px-3 py-1'>
          <BackButton />
          <h1 className='text-2xl'>알림</h1>
          <div className='w-9' />
        </header>

        <div className='flex flex-col gap-3 px-4 pb-6'>
          {alarmQuery.data.data.alarms.map((alarm) => {
            if (alarm.alarm_type === 'REQUEST') {
              return <RequestAlarm key={alarm.id} alarm={alarm} />
            }

            if (alarm.alarm_type === 'SUCCESS') {
              return <SuccessAlarm key={alarm.id} alarm={alarm} />
            }

            if (alarm.alarm_type === 'RE-REQUEST') {
              return <ReRequestAlarm key={alarm.id} alarm={alarm} />
            }

            return null
          })}
        </div>
      </main>
    </UserContextProvider>
  )
}
