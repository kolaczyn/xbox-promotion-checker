import { EmbedBuilder } from 'discord.js'
import { GameInfoWithColor } from './types'

export const createDiscordMessage = (game: GameInfoWithColor) =>
  new EmbedBuilder()
    .setTitle(game.title)
    .setDescription(`Było ${game.prevPrice}, jest ${game.currPrice}`)
    .setURL(game.url)
    .setColor(game.color)
