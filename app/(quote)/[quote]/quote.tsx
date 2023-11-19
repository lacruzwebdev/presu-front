'use client'
import CostsListCheckbox from '@/components/costs-list-checkbox'
import Cta from '@/components/cta'
import QuoteDetails from '@/components/quote-details'
import useTotalCost from './useTotalCost'

type Props = {
  quoteData: Quote
}
export default function Quote({ quoteData }: Props) {
  const { totalCost, selectedElements, toggle, getActive } = useTotalCost(
    quoteData.costs
  )
  return (
    <>
      <div className="grow w-full max-w-xl mx-auto px-4 sm:px-6 py-12 lg:pt-24 lg:pb-20 ">
        <article className="divide-y divide-slate-100 dark:divide-slate-800 -mt-8 mb-4">
          <QuoteDetails
            projectLength={quoteData.duration}
            startDate={quoteData.start}
            endDate={quoteData.end}
          />
          <CostsListCheckbox
            quoteSlug={quoteData.slug}
            total={{ totalCost, selectedElements, toggle }}
          />
          {/* <Terms /> */}
        </article>
      </div>
      <Cta
        quoteSlug={quoteData.slug}
        totalCost={totalCost}
        selectedElements={getActive()}
      />
    </>
  )
}
