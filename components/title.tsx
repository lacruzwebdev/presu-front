import Image from 'next/image'
import Illustration from '@/public/images/bg-illustration.svg'
import { getQuoteData } from '@/app/lib/getData'

export default async function Title() {
  return (
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
          <div className="space-y-3">
            <div className="h3 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-50">
              ¿Dudas?
            </div>
            <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/80 via-slate-200 to-slate-200/80 pb-4">
              Contacto
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
