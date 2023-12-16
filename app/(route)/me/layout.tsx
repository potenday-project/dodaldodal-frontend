import BottomNavigation from '@/app/_components/shared/bottom-navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='h-full'>
      {children}
      <BottomNavigation selected='me' />
    </main>
  )
}
