import { GameInfo } from '../types'

const formatInfo = (info: GameInfo) =>
  `${info.title}: z ${info.prevPrice} na ${info.currPrice}`

export const formatDiscordMessage = (games: GameInfo[]) =>
  games.length > 0 ? games.map(formatInfo).join('\n') : 'No games found'
