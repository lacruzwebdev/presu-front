interface QuoteDetailsProps {
  projectLength: string
  startDate: string
  endDate: string
}

export default function QuoteDetails({
  projectLength,
  startDate,
  endDate
}: QuoteDetailsProps) {
  return (
    <section className="py-8">
      <h2 className="text-lg font-semibold mb-5">Detalles</h2>
      <ul className="grid gap-4 min-[480px]:grid-cols-3 text-sm">
        <li className="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900">
          <div className="font-medium">Duración</div>
          <div className="text-slate-500 dark:text-slate-400">
            {projectLength}
          </div>
        </li>
        <li className="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900">
          <div className="font-medium">Fecha de Inicio</div>
          <time className="text-slate-500 dark:text-slate-400">
            {startDate}
          </time>
        </li>
        <li className="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900">
          <div className="font-medium">Fecha de Entrega</div>
          <time className="text-slate-500 dark:text-slate-400">{endDate}</time>
        </li>
      </ul>
    </section>
  )
}
