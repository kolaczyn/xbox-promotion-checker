import { fetchPage } from './fetchPage'
import { readWatchList } from './readWatchList'
import { scrapePage } from './scrapePage/scrapePage'
import { GameInfo } from './types'

const formatInfo = (info: GameInfo) =>
  `${info.title}: z ${info.prev} na ${info.curr}`

const getAllGames = () =>
  Promise.all([0, 1, 2, 3].map(fetchPage)).then(x => x.flatMap(scrapePage))

const filterWatchList = async () => {
  const [watchList, allGames] = await Promise.all([
    readWatchList(),
    getAllGames(),
  ])

  const messages = allGames
    .filter(game => watchList.includes(game.title))
    .map(formatInfo)

  if (messages.length) {
    return messages.forEach(x => console.log(x))
  }
  return console.log('No games found')
}

filterWatchList()
