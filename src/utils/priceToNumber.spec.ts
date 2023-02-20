import { priceToNumber } from './priceToNumber'

describe('priceToNumber', () => {
  it('returns number for valid input with a comma (,)', () => {
    expect(priceToNumber('21,37 zł')).toBeCloseTo(21.37)
  })

  it('returns number for valid input with a dot (.)', () => {
    expect(priceToNumber('12,30 zł')).toBeCloseTo(12.3)
  })

  it('returns null for invalid price', () => {
    expect(priceToNumber('hello world')).toBeNull()
    expect(priceToNumber('hello world zł')).toBeNull()
  })
})
