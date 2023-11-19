import BackButton from '@/components/ui/back-button'
import { getQuoteCost } from '@/app/lib/getData'
import ReactMarkdown from 'react-markdown'

export const metadata = {
  title: 'Detalles',
  description: 'Page description'
}

type Props = {
  params: {
    quote: string
    costId: number
  }
}

export default async function Details({ params: { quote, costId } }: Props) {
  const { id, title, description, content, price } = await getQuoteCost(
    quote,
    costId
  )
  return (
    <div className="grow w-full max-w-xl mx-auto px-4 sm:px-6 py-12 lg:pt-24 lg:pb-20">
      <BackButton />

      <article>
        <h2 className="h2 font-orbiter mb-4">{title}</h2>
        <div className="text-slate-500 dark:text-slate-400 space-y-4">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </article>
    </div>
  )
}
