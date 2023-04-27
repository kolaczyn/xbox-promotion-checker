import { getAllGames } from '../fetchPage'
import { readWatchList } from '../readWatchList'

export const fetchPromotions = async () => {
  const [watchList, allGames] = await Promise.all([
    readWatchList(),
    getAllGames(),
  ])

  return allGames.filter(game => watchList.includes(game.title))
}
