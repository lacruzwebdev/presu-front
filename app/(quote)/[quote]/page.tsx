import { notFound } from 'next/navigation'
import Quote from './quote'
import { getQuoteData, getSiteSettings } from '@/app/lib/getData'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSiteSettings()
  return {
    title: data.title
  }
}

export type QuoteParams = {
  params: {
    quote: string
  }
}

export default async function Home({ params: { quote } }: QuoteParams) {
  const { id, attributes: quoteData } = await getQuoteData(quote)
  if (!quoteData) return notFound()

  return <Quote quoteData={quoteData} />
}
