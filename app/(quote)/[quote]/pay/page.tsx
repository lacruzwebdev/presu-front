import { notFound } from 'next/navigation'
import { getQuoteData } from '@/app/lib/getData'
import Payment from './payment'
import BackButton from '@/components/ui/back-button'

export const metadata = {
  title: 'Contacto',
  description: 'Descripción'
}

export default async function Pay({
  params: { quote },
  searchParams
}: {
  params: { quote: string }
  searchParams: any
}) {
  const { attributes: quoteData } = await getQuoteData(quote)
  if (!quoteData) return notFound()
  const selectedCostsIds = searchParams.e
    .split(', ')
    .map((str: string) => Number(str))
  const selectedCosts = quoteData.costs.filter((cost: Cost) =>
    selectedCostsIds.includes(cost.id)
  )

  return (
    <div className="grow w-full max-w-xl mx-auto px-4 sm:px-6 py-12 lg:pt-24 lg:pb-20">
      <BackButton />
      <article>
        <h2 className="h2 font-orbiter mb-4">Confirmar y realizar el pago</h2>
        <div className="text-slate-500 dark:text-slate-400 space-y-4 mb-8">
          <p>Aprueba el presupuesto y realiza el pago a continuación</p>
        </div>
        <Payment
          slug={quoteData.slug}
          cliente={quoteData.cliente.data}
          quoteData={selectedCosts}
        />
      </article>
    </div>
  )
}
