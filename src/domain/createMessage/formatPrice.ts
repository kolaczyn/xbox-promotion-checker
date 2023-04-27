export const formatPrice = (price: number) =>
  new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' })
    .format(price)
    .replace(' ', '')
