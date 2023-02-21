import { GameInfo, WishItem } from '../types'
import { thresholdFilter } from './thresholdFilter'

describe('tresholdFilter', () => {
  it('omits games not included in wishlist', () => {
    const games = [{ title: 'Game One' }, { title: 'Game two' }] as GameInfo[]
    const wishList = [{ title: 'Game One', threshold: null }] as WishItem[]
    expect(thresholdFilter(games, wishList)).toMatchObject([
      { title: 'Game One' },
    ])
  })

  it('omits games above the threshold', () => {
    const games = [
      { title: 'Game One', currPrice: 200 },
      { title: 'Game Two', currPrice: 95 },
    ] as GameInfo[]
    const wishList = [
      { title: 'Game One', threshold: 100 },
      { title: 'Game Two', threshold: 100 },
    ] as WishItem[]
    expect(thresholdFilter(games, wishList)).toMatchObject([
      { title: 'Game Two', currPrice: 95 },
    ])
  })
})
