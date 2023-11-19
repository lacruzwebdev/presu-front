import { useMemo } from 'react'
import Link from 'next/link'
import { formatValue } from '@/components/utils/utils'

export interface Cost {
  id: number
  title: string
  description: string
  price: number
}

export default function CostsList({
  quoteSlug,
  costs
}: {
  quoteSlug: string
  costs: Cost[]
}) {
  const totalCost: number = useMemo<number>(() => {
    return costs.reduce((acc: number, cost: Cost) => acc + cost.price, 0)
  }, [costs])
  return (
    <section className="py-8">
      <h2 className="text-lg font-semibold mb-5">Desglose</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-sm">
          <thead className="sr-only">
            <tr>
              <th>Descripción</th>
              <th scope="col">Cost</th>
            </tr>
          </thead>
          <tbody>
            {costs.map((cost, index) => (
              <tr
                key={index}
                className="relative group odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900"
              >
                <th
                  scope="row"
                  className="text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg"
                >
                  <div className="font-semibold mb-0.5">
                    <Link
                      className="before:absolute before:inset-0 before:z-20 before:rounded-lg"
                      href={`${quoteSlug}/${cost.id}`}
                    >
                      {cost.title}
                    </Link>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400">
                    {cost.description}
                  </p>
                </th>
                <td className="font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Detalles->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:bg-gradient-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 group-odd:dark:after:from-slate-900 after:to-50% after:rounded-lg after:text-teal-500 after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition">
                  <span className="group-hover:opacity-0 transition-opacity">
                    {formatValue(cost.price)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" className="text-left font-normal px-4 py-5">
                <p className="text-slate-500 italic">Total:</p>
              </th>
              <td className="font-semibold text-right text-teal-500 text-base underline px-4 py-5 w-[1%]">
                {formatValue(totalCost)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}
