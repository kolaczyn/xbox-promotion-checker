import { WebhookClient } from 'discord.js'
import { createDiscordMessage } from './createDiscordMessage'
import { GameInfoWithColor } from './types'

/** @throws {Error} if env vars are not defined */
export const sendDiscordMessage = async (games: GameInfoWithColor[]) => {
  const { ID: id, TOKEN: token } = process.env
  if (id === undefined || token === undefined)
    // I hate throwing errors, but this is one of a few good use cases for it :p
    throw new Error(`id and/or token not defined. Can't send a message`)

  const webhookClient = new WebhookClient({ id, token })
  const embeds = games.map(game => createDiscordMessage(game))

  await webhookClient.send({
    content: 'Promocje wjechały',
    embeds: embeds,
  })
}
