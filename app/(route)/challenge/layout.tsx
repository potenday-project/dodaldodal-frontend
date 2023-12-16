import BottomNavigation from '@/app/_components/shared/bottom-navigation'
import Header from '@/app/_components/shared/header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='h-full bg-challenge-background bg-cover bg-center bg-no-repeat'>
      <Header>
        <Header.BackIcon />
        <Header.Title>챌린지</Header.Title>
        <div />
      </Header>
      {children}
      <BottomNavigation selected='challenge' />
    </main>
  )
}
