export async function getClientData(id: number) {
   const res = await fetch(`${process.env.STRAPI_URL}/clientes/${id}?populate=*`, {next: {revalidate: 0}})
   if (!res.ok) {
      throw new Error('Failed to fetch');
   }
   return res.json()
}

export async function getQuoteData(slug: string) {
   const res = await fetch(`${process.env.STRAPI_URL}/presupuestos?filters[slug][operator]=${slug}&populate=*`, {next: {revalidate: 0}})
   if (!res.ok) return null
   const {data} = await res.json()
   // await new Promise(resolve => setTimeout(resolve, 2000))
   return data[0]
}

export async function getQuoteCost(quoteSlug: string, costId: number) {
   const res = await fetch(`${process.env.STRAPI_URL}/presupuestos/?filters[slug][operator]=${quoteSlug}&populate=costs`, {next: {revalidate: 0}})
   if (!res.ok) return null;
   const {data} = await res.json();
   const quote = data[0]
   const {attributes: {costs}} = quote
   const costData = costs.find((cost: any) => cost.id == costId);
   // await new Promise(resolve => setTimeout(resolve, 5000))
   return costData ?? null
}

export async function getSiteSettings() {
   const res = await fetch(`${process.env.STRAPI_URL}/site-setting/?populate=logo`, {next: {revalidate: 0}});
   if (!res.ok) {
      throw new Error('No site settings found');
   }
   const {data} = await res.json();
   return {
      title: data.attributes.title,
      contact: data.attributes.contact,
      logo: data.attributes.logo.data.attributes
   }
}