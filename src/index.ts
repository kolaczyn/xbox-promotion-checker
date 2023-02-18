import dotenv from 'dotenv'
dotenv.config()

import { formatDiscordMessage } from './format'
import { sendDiscordMessage } from './discord'
import { fetchPromotions } from './fetchPromotions/fetchPromotions'

const main = async () => {
  const games = await fetchPromotions()
  const message = formatDiscordMessage(games)
  sendDiscordMessage(message)
}

main()
