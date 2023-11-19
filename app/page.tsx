import Brief from '@/components/brief'
import QuoteDetails from '@/components/quote-details'
import CostsList from '@/components/costs-list'
import Terms from '@/components/terms'
import Cta from '@/components/cta'

export const metadata = {
  title: 'Presupuesto',
  description: 'Page description'
}

export type QuoteParams = {
  params: {
    quote: string
  }
}

export default async function Home({ params: { quote } }: QuoteParams) {
  return <></>
}
