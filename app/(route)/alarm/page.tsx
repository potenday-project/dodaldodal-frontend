import BackButton from './_components/BackButton'
import RequestAlarm from './_components/requestAlarm'

export default function AlarmPage() {
  return (
    <main className='flex flex-col gap-3'>
      <header className='flex items-center justify-between px-3 py-1'>
        <BackButton />
        <h1 className='text-2xl'>알림</h1>
        <div className='w-9' />
      </header>

      <div className='flex flex-col gap-3 px-4 pb-6'>
        <RequestAlarm />
        <RequestAlarm />
        <RequestAlarm />
      </div>
    </main>
  )
}
