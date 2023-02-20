import { EmbedBuilder } from 'discord.js'
import { GameInfoWithColor } from './types'
import { calcPriceReduction } from './utils/calcPriceReduction'

const promotionReaction = (promotion: number) => {
  if (promotion > 80) return 'Meh promocja'
  if (promotion > 70) return 'Nawet okej promocja'
  if (promotion > 50) return 'Zastanów się nad tym'
  if (promotion > 25) return 'Bierz!!!'
  if (promotion > 10) return 'Nie zmarnuj tej okazji!!!!!!'
  return 'Jesli teraz nie kupisz, to po co masz to na liście? xD'
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' }).format(
    price
  )

export const createDiscordMessage = (game: GameInfoWithColor) => {
  const reduction = calcPriceReduction(game.prevPrice, game.currPrice)
  return new EmbedBuilder()
    .setTitle(game.title)
    .setDescription(
      [
        `Cena spadła z **${formatPrice(game.prevPrice)}** do **${formatPrice(
          game.currPrice
        )}**`,
        `Spadek o **${reduction}%**. ${promotionReaction(reduction)}`,
      ].join('\n')
    )
    .setURL(game.url)
    .setColor(game.color)
}
