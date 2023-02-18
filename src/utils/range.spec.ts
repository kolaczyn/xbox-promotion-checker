import { range } from './range'

test('range', () => {
  expect(range(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})
