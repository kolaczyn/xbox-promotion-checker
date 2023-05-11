import { getAllGames } from '../fetchPage'
import { readWatchList } from '../readWatchList'

export const fetchPromotions = async () => {
  const [watchList, allGames] = await Promise.all([
    readWatchList(),
    getAllGames(),
  ])

  console.log(`Found ${allGames.length} total games`)
  if (allGames.length === 0) {
    console.log(
      'No games found. That means, that the Xbox store has changed its layout and the scraper needs to be updated.'
    )
  }

  return allGames.filter(game => watchList.includes(game.title))
}
