import axios from 'axios'
import { scrapeNumberOfPages, scrapePage } from './scrapePage/scrapePage'
import { range } from '../utils/range'

const XBOX_URL = 'https://www.microsoft.com/pl-pl/store/deals/games/xbox'
const ITEMS_PER_AGE = 90

const fetchPage = (page = 0) =>
  Promise.resolve(`${XBOX_URL}?skipItems=${page * ITEMS_PER_AGE}`)
    .then(url => axios.get<string>(url))
    .then(resp => resp.data)

const fetchAllPages = async () => {
  const firstPage = await fetchPage(0)
  const FALLBACK_PAGES_NUM = 6
  const numberOfPages = scrapeNumberOfPages(firstPage) ?? FALLBACK_PAGES_NUM
  // yeah, I'm refetching the first page, but whatever :p
  return Promise.all(range(numberOfPages).map(fetchPage))
}

export const getAllGames = () =>
  fetchAllPages().then(x => x.flatMap(scrapePage))
