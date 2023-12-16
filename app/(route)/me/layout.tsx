import BottomNavigation from '@/app/_components/shared/bottom-navigation'
import Header from '@/app/_components/shared/header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='h-full'>
      <Header>
        <div />
        <Header.Title>MY</Header.Title>
        <div />
      </Header>
      {children}
      <BottomNavigation selected='me' />
    </main>
  )
}
