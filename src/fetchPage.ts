import axios from 'axios'

const XBOX_URL = 'https://www.microsoft.com/pl-pl/store/deals/games/xbox'
const ITEMS_PER_AGE = 90

const fetchPage = (page = 0) =>
  Promise.resolve(`${XBOX_URL}?skipItems=${page * ITEMS_PER_AGE}`)
    .then(url => axios.get<string>(url))
    .then(resp => resp.data)

export const fetchAllPages = () => Promise.all([0, 1, 2, 3].map(fetchPage))
