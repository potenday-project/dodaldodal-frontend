import BottomNavigation from '@/app/_components/shared/bottom-navigation'
import Header from '@/app/_components/shared/header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='h-full bg-home-background bg-cover bg-center bg-no-repeat'>
      <Header>
        <div />
        <Header.AlarmIcon />
      </Header>
      {children}
      <BottomNavigation selected='home' />
    </main>
  )
}
