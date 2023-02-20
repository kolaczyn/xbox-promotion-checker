export const priceToNumber = (price: string): number | null => {
  const trimmed = price.replace(',', '.').replace(' zł', '')
  const num = Number(trimmed)
  return Number.isNaN(num) ? null : num
}
