import { getDescription } from './getDescription'

test('getDescription', () => {
  expect(getDescription({ prevPrice: 99.0, currPrice: 19.8 }))
    .toMatchInlineSnapshot(`
    "Cena spadła z **99,00zł** do **19,80zł**
    Spadek o **80%**. Jesli teraz nie kupisz, to po co masz to na liście? xD"
  `)
})
