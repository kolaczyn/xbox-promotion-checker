import { ColorResolvable } from 'discord.js'

export type GameInfo = {
  title: string
  prevPrice: number
  currPrice: number
  url: string
  imageUrl: string
}

export type GameInfoWithColor = GameInfo & {
  color: ColorResolvable
}
