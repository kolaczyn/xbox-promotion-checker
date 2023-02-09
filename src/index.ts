import axios from 'axios'
import { scrapePage } from './scrapeData'
import { GameInfo } from './types'

const formatInfo = (info: GameInfo) =>
  `${info.title}: z ${info.prev} na ${info.curr}`

const itemsPerPage = 90
const fetchPage = async (page = 0) =>
  Promise.resolve(
    `https://www.microsoft.com/pl-pl/store/deals/games/xbox?skipItems=${
      page * itemsPerPage
    }`
  )
    .then(url => axios.get<string>(url))
    .then(resp => resp.data)

Promise.all([0, 1, 2, 3].map(fetchPage))
  .then(x => x.flatMap(scrapePage))
  .then(x => x.map(formatInfo))
  .then(console.log)
