import dotenv from 'dotenv'
dotenv.config()
import { WebhookClient } from 'discord.js'

import { fetchPage } from './fetchPage'
import { readWatchList } from './readWatchList'
import { scrapePage } from './scrapePage/scrapePage'
import { GameInfo } from './types'

const getAllGames = () =>
  Promise.all([0, 1, 2, 3].map(fetchPage)).then(x => x.flatMap(scrapePage))
const fetchWatchlistGamesOnPromotion = async () => {
  const [watchList, allGames] = await Promise.all([
    readWatchList(),
    getAllGames(),
  ])

  return allGames.filter(game => watchList.includes(game.title))
}

const formatInfo = (info: GameInfo) =>
  `${info.title}: z ${info.prev} na ${info.curr}`
const formatDiscordMessage = (games: GameInfo[]) =>
  games.length > 0 ? games.map(formatInfo).join('\n') : 'No games found'

/** @throws {Error} if env vars are not defined */
const sendDiscordMessage = async (message: string) => {
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

const main = async () => {
  const games = await fetchWatchlistGamesOnPromotion()
  const message = formatDiscordMessage(games)
  sendDiscordMessage(message)
}

main()
