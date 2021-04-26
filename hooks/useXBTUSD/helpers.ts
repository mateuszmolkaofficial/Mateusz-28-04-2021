import { PriceSizeObject, PriceSizeArray, DisplayPriceSizeArray } from "hooks/useXBTUSD"

export const updateRecord = (update: PriceSizeArray, current: PriceSizeObject) => {
  update.forEach(item => {
    const priceLevel = item[0]
    const size = item[1]

    if (size !== 0) {
      current[priceLevel] = size
    } else {
      delete current[priceLevel]
    }
  })

  return current
}

const compare = (a: PriceSizeArray, b: PriceSizeArray) => Number(a[0]) - Number(b[0])

export const formatReturnData = (
  data: PriceSizeObject,
  showLast = true,
  size = 5,
): DisplayPriceSizeArray => {
  let lastTotal = 0
  const mapTotal = item => {
    if (lastTotal) {
      const value = lastTotal + item[1]
      item[2] = value
      lastTotal = value
    } else {
      const value = item[1]
      lastTotal = value
      item[2] = value
    }
    return item
  }
  const array: PriceSizeArray = <PriceSizeArray>Object.keys(data)
    .map(key => [Number(key), data[key]])
    .sort(compare)

  return showLast
    ? array.slice(0, size).map(mapTotal).reverse()
    : array.reverse().slice(0, size).map(mapTotal)
}
