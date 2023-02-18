import { WebhookClient } from 'discord.js'

/** @throws {Error} if env vars are not defined */
export const sendDiscordMessage = async (message: string) => {
  const { ID: id, TOKEN: token } = process.env
  if (id === undefined || token === undefined)
    // I hate throwing errors, but this is one of a few good use cases for it :p
    throw new Error(`id and/or token not defined. Can't send a message`)

  const webhookClient = new WebhookClient({ id, token })
  console.log('sending message:\n', message)
  await webhookClient.send({
    content: message,
  })
  console.log('message sent')
}
