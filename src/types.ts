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

export type WishInput = string | WishItem

export type WishItem = {
  title: string
  threshold: number | null
}
