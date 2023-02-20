import { EmbedBuilder } from 'discord.js'
import { GameInfoWithColor } from './types'

export const createDiscordMessage = (game: GameInfoWithColor) =>
  new EmbedBuilder()
    .setTitle(game.title)
    .setDescription(`Było ${game.prev}, jest ${game.curr}`)
    .setURL(game.url)
    .setColor(game.color)
