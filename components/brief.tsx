import ReactMarkdown from 'react-markdown'

export default function Brief({ content }: { content: string }) {
  return (
    <section className="py-8">
      <h2 className="text-lg font-semibold mb-2 text-slate-200">Briefing</h2>
      <ReactMarkdown className="text-slate-400 space-y-4">
        {content}
      </ReactMarkdown>
    </section>
  )
}
