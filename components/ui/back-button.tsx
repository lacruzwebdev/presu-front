'use client'
import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()
  return (
    <div className="lg:absolute lg:top-6 z-40 mb-6 lg:mb-0">
      <button
        onClick={() => router.back()}
        className="relative cursor-pointer h-8 w-8 inline-flex items-center justify-center rounded-full bg-white border border-slate-200 hover:border-slate-300 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-slate-700 shadow shadow-black/5 transition-colors"
      >
        <svg width="12" height="10" xmlns="http://www.w3.org/2000/svg">
          <path
            className="fill-teal-500"
            d="m5.94 10 1.05-.959-3.645-3.344H11.5V4.303H3.345L6.99.954 5.94 0 .5 5z"
          />
        </svg>
        <span className="sr-only">Back to Home</span>
      </button>
    </div>
  )
}
