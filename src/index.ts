import dotenv from 'dotenv'
dotenv.config()

import { program } from 'commander'
import { sendDiscordMessage } from './sendMessage/sendDiscordMessage'
import { fetchPromotions } from './fetchPromotions/fetchPromotions'
import { getGamesColor } from './getGamesColors'
import { sendConsoleMessage } from './sendMessage/sendConsoleMessage'
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
