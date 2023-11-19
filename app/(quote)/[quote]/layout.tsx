import '@/app/css/style.css'

import { Inter, Caveat } from 'next/font/google'
import localFont from 'next/font/local'
import Header from '@/components/ui/header'
import QuoteTitle from '@/components/quote-title'
import { Suspense } from 'react'
import Image from 'next/image'
import Illustration from '@/public/images/bg-illustration.svg'
import Skeleton from '@/components/ui/skeleton'

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
      path: '../../../public/fonts/OrbiterDisplay-Bold.woff',
      weight: '700'
    }
  ],
  variable: '--font-orbiter',
  display: 'swap'
})

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
        <div className="relative w-full lg:w-1/2 lg:fixed lg:inset-0 lg:overflow-y-auto no-scrollbar bg-slate-900 lg:rounded-r-[3rem]">
          {/* Background Illustration */}
          <div
            className="absolute top-0 -translate-y-64 left-1/2 -translate-x-1/2 blur-3xl pointer-events-none"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={Illustration}
              width={785}
              height={685}
              alt="Bg illustration"
            />
          </div>
          <div className="min-h-full w-full max-w-xl mx-auto flex flex-col justify-start px-4 sm:px-6 pt-36 pb-20 lg:py-20">
            <div className="grow flex flex-col justify-center">
              <Suspense fallback={<Skeleton />}>
                <QuoteTitle quote={quote} />
              </Suspense>
            </div>
          </div>
        </div>

        {/* Right side */}
        <main className="max-lg:grow flex flex-col w-full lg:w-1/2 lg:ml-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
