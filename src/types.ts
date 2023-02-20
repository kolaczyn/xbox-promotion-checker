import { ColorResolvable } from 'discord.js'

export type GameInfo = {
  title: string
  prevPrice: string
  currPrice: string
  url: string
  imageUrl: string
}

export type GameInfoWithColor = GameInfo & {
  color: ColorResolvable
}
