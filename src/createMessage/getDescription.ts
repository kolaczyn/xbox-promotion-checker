import { formatPrice } from './formatPrice'
import { getReduction } from './getReduction'
import { promotionReaction } from './promotionReaction'

type Args = {
  prevPrice: number
  currPrice: number
}
export const getDescription = ({ currPrice, prevPrice }: Args) => {
  const reduction = getReduction(prevPrice, currPrice)
  return [
    `Cena spadła z **${formatPrice(prevPrice)}** do **${formatPrice(
      currPrice
    )}**`,
    `Spadek o **${reduction}%**. ${promotionReaction(reduction)}`,
  ].join('\n')
}
