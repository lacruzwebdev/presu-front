import Link from 'next/link'
import { formatValue } from './utils/utils'

export default function Cta({
  quoteSlug,
  totalCost,
  selectedElements
}: {
  quoteSlug: string
  totalCost: number
  selectedElements: any
}) {
  const selectedIds = selectedElements.map((item: Cost) => item.id).join(', ')
  return (
    <div className="fixed bottom-0 z-30 w-full lg:w-1/2 bg-white dark:bg-slate-950 !bg-opacity-80 backdrop-blur-sm">
      <div className="w-full max-w-xl mx-auto px-4 sm:px-6">
        <div className="flex py-4 md:py-6 space-x-4">
          <Link
            className="btn w-full text-slate-900 dark:text-slate-200 bg-white dark:bg-slate-900 border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700 shadow shadow-black/5"
            href="/contact"
          >
            Contacto
          </Link>
          <Link
            className="btn w-full text-slate-900 bg-teal-500 hover:bg-teal-400 shadow shadow-black/5 animate-shine bg-[linear-gradient(100deg,theme(colors.teal.500),45%,theme(colors.emerald.100),55%,theme(colors.teal.500))] bg-[size:200%_100%] hover:bg-[image:none]"
            href={{
              pathname: `${quoteSlug}/pay`,
              query: {
                e: selectedIds
              }
            }}
          >
            Pagar - {formatValue(totalCost)}
          </Link>
        </div>
      </div>
    </div>
  )
}
