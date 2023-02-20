import dotenv from 'dotenv'
dotenv.config()

import { sendDiscordMessage } from './discord'
import { fetchPromotions } from './fetchPromotions/fetchPromotions'
import { getGamesColor } from './getGamesColors'

const main = async () => {
  const games = await fetchPromotions()
  const gamesWithColors = await getGamesColor(games)
  sendDiscordMessage(gamesWithColors)
}

main()
