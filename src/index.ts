import dotenv from 'dotenv'
dotenv.config()

import { sendDiscordMessage } from './discord'
import { fetchPromotions } from './fetchPromotions/fetchPromotions'

const main = async () => {
  const games = await fetchPromotions()
  sendDiscordMessage(games)
}

main()
