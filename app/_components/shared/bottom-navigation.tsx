import Link from 'next/link'

import { ROUTE } from '@/app/_constants/route'

import ActiveHomeIcon from '../icons/ActiveHomeIcon'
import ActiveProfileIcon from '../icons/ActiveProfileIcon'
import ActiveStarIcon from '../icons/ActiveStarIcon'
import HomeIcon from '../icons/HomeIcon'
import ProfileIcon from '../icons/ProfileIcon'
import StarIcon from '../icons/StarIcon'

interface BottomNavigationProps {
  selected: 'home' | 'challenge' | 'me'
}

export default function BottomNavigation({ selected }: BottomNavigationProps) {
  return (
    <div className='fixed bottom-0 left-0 z-10 flex h-14 w-full justify-center bg-dodal-main'>
      <div className='w-full max-w-lg'>
        <div className='flex h-full items-center justify-around'>
          <Link href={ROUTE.HOME}>{selected === 'home' ? <ActiveHomeIcon /> : <HomeIcon />}</Link>

          <Link href={ROUTE.CHALLENGE}>{selected === 'challenge' ? <ActiveStarIcon /> : <StarIcon />}</Link>

          <Link href={ROUTE.ME}>{selected === 'me' ? <ActiveProfileIcon /> : <ProfileIcon />}</Link>
        </div>
      </div>
    </div>
  )
}
