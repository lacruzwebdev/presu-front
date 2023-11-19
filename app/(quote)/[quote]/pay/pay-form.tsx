'use client'

import Spinner from '@/components/ui/spinner'
import {
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe
} from '@stripe/react-stripe-js'
import { useState } from 'react'

export default function PayForm({
  slug,
  cliente,
  amount,
  listaComprados
}: {
  slug: string
  cliente: Client
  amount: number
  listaComprados: string
}) {
  const [loading, setLoading] = useState<boolean>(true)

  const stripe = useStripe()
  const elements = useElements()

  if (!stripe || !elements) {
    return
  }

  const handleReady = () => {
    setLoading(false)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      if (!stripe || !elements) return null

      const { error: submitError } = await elements.submit()

      const data = await fetch('/api/create-payment-intent', {
        method: 'POST',
        body: JSON.stringify({
          data: { slug, amount, costs: listaComprados }
        })
      })
      const clientSecret = await data.json()
      await stripe?.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: 'https://lacruzwebdev.com'
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {loading && <Spinner />}
      <form className={loading ? 'hidden' : undefined} onSubmit={onSubmit}>
        <LinkAuthenticationElement className="mb-6" />
        <PaymentElement
          options={{
            defaultValues: {
              billingDetails: {
                name: cliente.attributes.name
              }
            }
          }}
          onReady={handleReady}
        />
        <button
          className="mt-12 btn w-full text-slate-900 bg-teal-500 hover:bg-teal-400 shadow shadow-black/5 animate-shine bg-[linear-gradient(100deg,theme(colors.teal.500),45%,theme(colors.emerald.100),55%,theme(colors.teal.500))] bg-[size:200%_100%] hover:bg-[image:none]"
          type="submit"
          disabled={!stripe || !elements}
        >
          Pagar - {amount} €
        </button>
      </form>
    </>
  )
}
