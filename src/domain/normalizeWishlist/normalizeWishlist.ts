import { WishItem, WishInput } from '../../types'

export const normalizeWishlist = (input: WishInput[]): WishItem[] =>
  input.map(x => (typeof x === 'string' ? { title: x, threshold: null } : x))
