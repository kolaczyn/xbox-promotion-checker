import fs from 'fs/promises'
import axios from 'axios'
import { scrapePage } from './scrapePage/scrapePage'
import { GameInfo } from './types'

const formatInfo = (info: GameInfo) =>
  `${info.title}: z ${info.prev} na ${info.curr}`

const XBOX_URL = 'https://www.microsoft.com/pl-pl/store/deals/games/xbox'
const ITEMS_PER_AGE = 90

const fetchPage = (page = 0) =>
  Promise.resolve(`${XBOX_URL}?skipItems=${page * ITEMS_PER_AGE}`)
    .then(url => axios.get<string>(url))
    .then(resp => resp.data)

const readWatchList = () =>
  fs.readFile('./watchlist.txt').then(x => x.toString().split('\n'))

const getAllGames = () =>
  Promise.all([0, 1, 2, 3].map(fetchPage)).then(x => x.flatMap(scrapePage))

const filterWatchList = async () => {
  const [watchList, allGames] = await Promise.all([
    readWatchList(),
    getAllGames(),
  ])

  allGames
    .filter(game => watchList.includes(game.title))
    .map(formatInfo)
    .forEach(x => console.log(x))
}

filterWatchList()
