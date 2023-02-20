import { EmbedBuilder } from 'discord.js'
import { promotionReaction } from './promotionReaction'
import { GameInfoWithColor } from '../types'
import { getReduction } from './getReduction'
import { formatPrice } from './formatPrice'

export const createMessage = (game: GameInfoWithColor) => {
  const reduction = getReduction(game.prevPrice, game.currPrice)
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
