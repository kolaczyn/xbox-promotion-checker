import { GameInfoWithColor } from '../../types'

export type SendMessage = (games: GameInfoWithColor[]) => Promise<void>
