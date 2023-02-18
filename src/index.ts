import dotenv from 'dotenv'
dotenv.config()

import { fetchAllPages } from './fetchPage'
import { readWatchList } from './readWatchList'
import { scrapePage } from './scrapePage/scrapePage'
import { formatDiscordMessage } from './format'
import { sendDiscordMessage } from './discord'

const getAllGames = () => fetchAllPages().then(x => x.flatMap(scrapePage))

const fetchWatchlistGamesOnPromotion = async () => {
  const [watchList, allGames] = await Promise.all([
    readWatchList(),
    getAllGames(),
  ])

  return allGames.filter(game => watchList.includes(game.title))
}

const main = async () => {
  const games = await fetchWatchlistGamesOnPromotion()
  const message = formatDiscordMessage(games)
  sendDiscordMessage(message)
}

main()
