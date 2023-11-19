import BackButton from '@/components/ui/back-button'

export const metadata = {
  title: 'Details - Contact',
  description: 'Page description'
}

export default function Contact() {
  return (
    <div className="grow w-full max-w-xl mx-auto px-4 sm:px-6 py-12 lg:pt-24 lg:pb-20">
      <BackButton />
      <article>
        <h2 className="h2 font-orbiter mb-4">Contacto</h2>
        <div className="text-slate-500 dark:text-slate-400 space-y-4 mb-8">
          <p>Ponte en contacto con nosotros si tienes cualquier duda</p>
        </div>
        <form>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="form-input w-full"
                type="email"
                placeholder="tu@correo.com"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="client"
              >
                Cliente
              </label>
              <input
                id="client"
                className="form-input w-full disabled:bg-slate-100 dark:disabled:bg-slate-800 disabled:text-slate-500 dark:disabled:text-slate-400 disabled:cursor-not-allowed disabled:shadow-none"
                type="text"
                placeholder="Nombre de cliente"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="subject"
              >
                Asunto
              </label>
              <select id="subject" className="form-select w-full" required>
                <option>Hay un error en el presupuesto</option>
                <option>Tengo un problema con el pago</option>
              </select>
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="message"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="form-textarea w-full"
                placeholder="Por favor explica detalladamente tu problema."
                required
              ></textarea>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="btn w-full text-slate-900 bg-teal-500 hover:bg-teal-400 shadow shadow-black/5"
            >
              Send
            </button>
          </div>
        </form>
      </article>
    </div>
  )
}
