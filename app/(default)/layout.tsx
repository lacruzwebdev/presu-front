import '@/app/css/style.css'

import { Inter, Caveat } from 'next/font/google'
import localFont from 'next/font/local'
import Header from '@/components/ui/header'
import Title from '@/components/title'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap'
})

const orbiter = localFont({
  src: [
    {
      path: '../../public/fonts/OrbiterDisplay-Bold.woff',
      weight: '700'
    }
  ],
  variable: '--font-orbiter',
  display: 'swap'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function QuoteLayout({
  children,
  params: { quote }
}: {
  children: React.ReactNode
  params: { quote: string }
}) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <div className="grow flex flex-col lg:flex-row">
        {/* Left side */}
        <Title />

        {/* Right side */}
        <main className="max-lg:grow flex flex-col w-full lg:w-1/2 lg:ml-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
