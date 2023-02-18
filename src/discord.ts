import { EmbedBuilder, WebhookClient, ColorResolvable } from 'discord.js'
import { getAverageColor } from 'fast-average-color-node'
import { GameInfo } from './types'

const getColor = async (imageUrl: GameInfo['imageUrl']) => {
  return (
    imageUrl ? (await getAverageColor(imageUrl)).hex : 'Random'
  ) as ColorResolvable
}

/** @throws {Error} if env vars are not defined */
export const sendDiscordMessage = async (games: GameInfo[]) => {
  const { ID: id, TOKEN: token } = process.env
  if (id === undefined || token === undefined)
    // I hate throwing errors, but this is one of a few good use cases for it :p
    throw new Error(`id and/or token not defined. Can't send a message`)

  const gamesWithColors = await Promise.all(
    games.map(async game => {
      const color = await getColor(game.imageUrl)
      console.log({ color })
      return {
        ...game,
        color,
      }
    })
  )

  const webhookClient = new WebhookClient({ id, token })
  const embeds = gamesWithColors.map(game =>
    new EmbedBuilder()
      .setTitle(game.title)
      .setDescription(`Było ${game.prev}, jest ${game.curr}`)
      .setURL(game.url)
      .setColor(game.color)
  )

  await webhookClient.send({
    content: 'Promocje wjechały',
    embeds: embeds,
  })
}
