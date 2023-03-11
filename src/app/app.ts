import { GameInfo } from '../types'

type AppArgs<T> = {
  getGames: () => Promise<GameInfo[]>
  gamesStrategy: (games: GameInfo[]) => Promise<T[]>
  sendMessage: (games: T[]) => Promise<void>
}

export const app = async <T>({
  getGames,
  sendMessage,
  gamesStrategy,
}: AppArgs<T>) => {
  const games = await getGames()

  if (games.length === 0) {
    return console.log('No promotions found')
  }

  const gamesWithExtraData = await gamesStrategy(games)
  sendMessage(gamesWithExtraData)
}
