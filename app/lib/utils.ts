const calculateTotal = (costs: Cost[], active = false) => {
  if (active) {
    return costs.reduce((acc: number, cost: Cost) => {
      return cost.isActive ? acc + cost.price : acc
    }, 0)
  } else {
    return costs.reduce((acc: number, cost: Cost) => acc + cost.price, 0)
  }
}

function getImageUrl(url: string) {
  return `${process.env.PUBLIC_STRAPI_URL}${url}`
}

export {calculateTotal, getImageUrl}