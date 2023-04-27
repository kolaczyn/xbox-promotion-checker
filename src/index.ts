import dotenv from 'dotenv'
dotenv.config()

import { program } from 'commander'
import { sendDiscordMessage } from './infrastructure/sendMessage/sendDiscordMessage'
import { fetchPromotions } from './infrastructure/fetchPromotions/fetchPromotions'
import { getGamesColor } from './infrastructure/getGamesColors'
import { sendConsoleMessage } from './infrastructure/sendMessage/sendConsoleMessage'
import { app } from './app/app'

program
  .name('Xbox Promotion Checker')
  .description(
    'Discord bot checking Xbox store for promotions every now and then'
  )
  .option(
    '--dry-run',
    "If enabled, a list of games will be printed to the terminal and a Discord message won't be sent",
    false
  )

program.parse()

const main = async () => {
  const options = program.opts()
  const isDryRun = !!options.dryRun
  const sendMessage = isDryRun ? sendConsoleMessage : sendDiscordMessage

  await app({
    sendMessage,
    gamesStrategy: getGamesColor,
    getGames: fetchPromotions,
  })
}

main()
