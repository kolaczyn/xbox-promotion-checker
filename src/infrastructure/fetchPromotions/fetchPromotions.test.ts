import { GameInfo } from '../../types'
import { fetchPromotions } from './fetchPromotions'

jest.mock('../readWatchList.ts', () => ({
  readWatchList: () => Promise.resolve(['Elden Ring', 'Witcher 3']),
}))
jest.mock('../fetchPage.ts', () => ({
  getAllGames: () =>
    Promise.resolve<GameInfo[]>([
      { title: 'Elden Ring', curr: '200 zł', prev: '100 zł' },
      { title: 'GTA V', curr: '150 zł', prev: '200 zł' },
    ] as GameInfo[]),
}))

describe('fetchPromotions', () => {
  it('gets games on watch list', async () => {
    const result = await fetchPromotions()
    expect(result).toMatchObject([
      { title: 'Elden Ring', curr: '200 zł', prev: '100 zł' },
    ])
  })
})
