import { createMessage } from './createMessage/createMessage'
import { GameInfoWithColor } from './types'

export const sendConsoleMessage = (games: GameInfoWithColor[]) => {
  const messages = games.map(createMessage).map(x => x.data)
  console.table(messages)
}
