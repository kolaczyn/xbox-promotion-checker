import { createMessage } from '../../domain/createMessage/createMessage'
import { GameInfoWithColor } from '../../types'
import { SendMessage } from './types'

export const sendConsoleMessage: SendMessage = (
  games: GameInfoWithColor[]
): Promise<void> => {
  const messages = games.map(createMessage).map(x => x.data)
  console.table(messages)
  return Promise.resolve()
}
