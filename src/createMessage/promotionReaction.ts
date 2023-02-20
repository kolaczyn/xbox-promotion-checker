export const promotionReaction = (reduction: number) => {
  if (reduction > 80) return 'Nie warto'
  if (reduction > 70) return 'Meh'
  if (reduction > 50) return 'Maybe'
  if (reduction > 35) return 'Nieźla promka'
  if (reduction > 15) return 'Nie zmarnuj tej okazji!!!!!!'
  return 'Jesli teraz nie kupisz, to po co masz to na liście? xD'
}
