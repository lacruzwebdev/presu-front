import { getQuoteData } from '@/app/lib/getData'
import QuoteTitle from '../quote-title'
import { notFound } from 'next/navigation'

type Props = {
  children: React.ReactNode
  quote: string
}
export default async function Content({ children, quote }: Props) {
  const quoteData = await getQuoteData(quote)
  if (!quoteData) return notFound()
  return (
    <div className="grow flex flex-col lg:flex-row">
      {/* Left side */}
      <QuoteTitle quote={quoteData} />

      {/* Right side */}
      <main className="max-lg:grow flex flex-col w-full lg:w-1/2 lg:ml-auto">
        {children}
      </main>
    </div>
  )
}
