import Image from 'next/image'
import Illustration from '@/public/images/bg-illustration.svg'
import { getQuoteData } from '@/app/lib/getData'
import Brief from './brief'
import QuoteDetails from './quote-details'

export default async function QuoteTitle({ quote }: { quote: string }) {
  const { id, attributes: quoteData } = await getQuoteData(quote)
  return (
    <div className="space-y-3">
      <div className="h3 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-50">
        {quoteData.cliente?.data?.attributes.name}
      </div>
      <h1 className="h1 text-5xl bg-clip-text text-transparent bg-gradient-to-r from-slate-200/80 via-slate-200 to-slate-200/80 pb-4">
        {quoteData.title}
      </h1>
      <Brief content={quoteData.brief} />
    </div>
  )
}
