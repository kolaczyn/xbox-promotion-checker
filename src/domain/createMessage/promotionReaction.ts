export const promotionReaction = (reduction: number) => {
  if (reduction < 15) return 'Nie warto'
  if (reduction < 35) return 'Meh'
  if (reduction < 50) return 'Maybe'
  if (reduction < 70) return 'Nieźla promka'
  if (reduction < 80) return 'Nie zmarnuj tej okazji!!!!!!'
  return 'Jesli teraz nie kupisz, to po co masz to na liście? xD'
}
