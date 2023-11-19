'use client'
import { Elements } from '@stripe/react-stripe-js'
import { StripeElementsOptionsMode, loadStripe } from '@stripe/stripe-js'
import PayForm from './pay-form'

type Props = {
  slug: string
  cliente: Client
  quoteData: Cost[]
}
export default function Payment({ slug, cliente, quoteData }: Props) {
  const totalCost = quoteData.reduce((acc: number, obj: Cost) => {
    acc += obj.price
    return acc
  }, 0)

  const elementosComprados = quoteData.map((item) => item.title).join(' ')

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)
  const options: StripeElementsOptionsMode = {
    mode: 'payment',
    currency: 'eur',
    amount: totalCost,
    appearance: {
      theme: 'night',
      variables: {
        colorPrimary: '#34D399',
        colorBackground: '#020617',
        colorText: '#E2E8F0',
        colorDanger: '#df1b41',
        fontFamily: 'Inter, system-ui, sans-serif',
        spacingUnit: '0.5rem',
        borderRadius: '0.5rem'
      },
      rules: {
        '.Input': {
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
          paddingLeft: '0.75rem',
          paddingRight: '0.75rem',
          borderColor: '#334155'
        },
        '.Input::placeholder': {
          color: '#475569'
        },
        '.Input:focus': {
          borderColor: '#34D399'
        }
      }
    }
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <PayForm
        slug={slug}
        cliente={cliente}
        amount={totalCost}
        listaComprados={elementosComprados}
      />
    </Elements>
  )
}
