export const getReduction = (prev: number, curr: number): number => {
  // this won't work if somehow `curr` > `prev`
  const reduction = (prev - curr) / prev
  return Math.floor(reduction * 100)
}
