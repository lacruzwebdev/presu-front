'use client'
import Link from 'next/link'
import { formatValue } from '@/components/utils/utils'

export default function CostsListCheckbox({
  quoteSlug,
  total
}: {
  quoteSlug: string
  total: {
    totalCost: number
    selectedElements: Cost[]
    toggle: Function
  }
}) {
  const { totalCost, selectedElements, toggle } = total

  const onCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id
    toggle(id)
  }

  return (
    <section className="py-8">
      <h2 className="text-lg font-semibold mb-5">Desglose</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-sm">
          <thead className="sr-only">
            <tr>
              <th>Selected</th>
              <th>Descripción</th>
              <th scope="col">Cost</th>
            </tr>
          </thead>
          <tbody>
            {selectedElements.map((cost, index) => (
              <tr
                key={index}
                className="relative group odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900"
              >
                <td>
                  <div className="flex px-2">
                    {cost.optional && (
                      <>
                        <input
                          id={String(cost.id)}
                          type="checkbox"
                          onChange={(e) => onCostChange(e)}
                          checked={cost.isActive}
                          className="mx-auto w-4 h-4 text-teal-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        ></input>
                      </>
                    )}
                  </div>
                </td>
                <th
                  scope="row"
                  className="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg"
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
                <td className="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Detalles->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:bg-gradient-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 group-odd:dark:after:from-slate-900 after:to-50% after:rounded-lg after:text-teal-500 after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition">
                  <Link
                    className="before:absolute before:inset-0 before:z-20 before:rounded-lg"
                    href={`${quoteSlug}/${cost.id}`}
                  >
                    <span className="group-hover:opacity-0 transition-opacity">
                      {formatValue(cost.price)}
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
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
