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

Promise.all([0, 1, 2, 3].map(fetchPage))
  .then(x => x.flatMap(scrapePage))
  .then(x => x.map(formatInfo))
  .then(console.log)
