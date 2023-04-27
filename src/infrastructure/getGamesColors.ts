import { ColorResolvable, HexColorString } from 'discord.js'
import { getAverageColor } from 'fast-average-color-node'
import { GameInfo } from '../types'

const isHex = (color: string): color is HexColorString => color.startsWith('#')

const getColor = async (
  imageUrl: GameInfo['imageUrl']
): Promise<ColorResolvable> => {
  const color = (await getAverageColor(imageUrl)).hex
  if (isHex(color)) {
    return color
  }
  return 'Random'
}

export const getGamesColor = async (games: GameInfo[]) =>
  await Promise.all(
    games.map(async game => {
      const color = await getColor(game.imageUrl)
      return {
        ...game,
        color,
      }
    })
  )
