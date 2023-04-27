import { getReduction } from './getReduction'

test('calcPriceReduction', () => {
  expect(getReduction(5, 4)).toEqual(20)
  expect(getReduction(100, 98.5)).toEqual(1)
})
