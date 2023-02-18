import { GameInfo } from './types'

const formatInfo = (info: GameInfo) =>
  `${info.title}: z ${info.prev} na ${info.curr}`

export const formatDiscordMessage = (games: GameInfo[]) =>
  games.length > 0 ? games.map(formatInfo).join('\n') : 'No games found'
