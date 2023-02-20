import { ColorResolvable } from 'discord.js'

export type GameInfo = {
  title: string
  prev: string
  curr: string
  url: string
  imageUrl: string
}

export type GameInfoWithColor = GameInfo & {
  color: ColorResolvable
}
