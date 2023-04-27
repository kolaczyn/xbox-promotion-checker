import { EmbedBuilder } from 'discord.js'
import { GameInfoWithColor } from '../../types'
import { getDescription } from './getDescription'

export const createMessage = (game: GameInfoWithColor) => {
  return new EmbedBuilder()
    .setTitle(game.title)
    .setDescription(
      getDescription({ currPrice: game.currPrice, prevPrice: game.prevPrice })
    )
    .setURL(game.url)
    .setColor(game.color)
}
