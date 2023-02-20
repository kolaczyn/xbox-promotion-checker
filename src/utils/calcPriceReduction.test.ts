import { calcPriceReduction } from './calcPriceReduction'

test('calcPriceReduction', () => {
  expect(calcPriceReduction(5, 4)).toEqual('20%')
  expect(calcPriceReduction(100, 90)).toEqual('10%')
})
