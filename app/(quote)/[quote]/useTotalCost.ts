import { calculateTotal } from "@/app/lib/utils"
import { useEffect, useState } from "react"

  const useTotalCost = (costs: Cost[]) => {
    const initialSelected = costs.map((cost: Cost) => {
      return {
        id: cost.id,
        title: cost.title,
        description: cost.description,
        content: cost.content,
        price: cost.price,
        optional: cost.optional,
        isActive: true
      }
    })

    const [totalCost, setTotalCost] = useState(calculateTotal(initialSelected))
    const [selectedElements, setSelectedElements] = useState(initialSelected)

    useEffect(() => {
      setTotalCost(calculateTotal(selectedElements, true))
    }, [selectedElements])

    const toggle = (id: number) => {
      const newElements = selectedElements.map((item: Cost) => {
        if (item.id == id) {
          return {...item, isActive: !item.isActive}
        }
        return item
      })
      setSelectedElements(newElements)
    }

    const getActive = () => {
      return selectedElements.filter(item => item.isActive)
    }

    return {
      totalCost,
      toggle,
      selectedElements,
      getActive
    }
  }

  export default useTotalCost