import { WishInput } from '../types'
import { normalizeWishlist } from './normalizeWishlist'

describe('normalizeWishlist', () => {
  it('normalizes array items to the same type', () => {
    const input: WishInput[] = [
      { threshold: 21, title: 'hi mom' },
      'hello world',
    ]

    expect(normalizeWishlist(input)).toMatchObject([
      { threshold: 21, title: 'hi mom' },
      { title: 'hello world', threshold: null },
    ])
  })
})
