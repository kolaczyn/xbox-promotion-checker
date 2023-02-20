export type Percent = `${number}%`

export const calcPriceReduction = (prev: number, curr: number): Percent => {
  // this won't work if somehow `curr` > `prev`
  const reduction = (prev - curr) / prev
  const pretty = Math.floor(reduction * 100)
  return `${pretty}%`
}
