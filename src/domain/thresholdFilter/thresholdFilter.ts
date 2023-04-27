import { GameInfo, WishItem } from '../../types'

const isPriceOk = (price: number, threshold: number | null) => {
  if (threshold === null) return true
  return price <= threshold
}

export const thresholdFilter = <T extends GameInfo>(
  games: T[],
  wishlist: WishItem[]
): T[] =>
  games.filter(game =>
    wishlist.find(
      wish =>
        game.title === wish.title && isPriceOk(game.currPrice, wish.threshold)
    )
  )
