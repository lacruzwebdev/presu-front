type Quote = {
   title: string,
   brief: string,
   duration: string,
   end: string,
   start: string,
   slug: string,
   costs: Cost[]
}

type Cost = {
   id: number,
   title: string,
   description: string,
   content: string,
   price: number,
   optional: boolean
   isActive: boolean
}

type Client = {
   id: number,
   attributes: {
      name: string,
      slug: string
   }
}
