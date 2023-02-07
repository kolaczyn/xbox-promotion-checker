import axios from 'axios'
import { parse } from 'node-html-parser'

const fetchHtml = async (skipItems = 0) => {
  const url = `https://www.microsoft.com/pl-pl/store/deals/games/xbox?skipItems=${skipItems}`
  const response = await axios.get(url)
  return response.data as string
}

const getPage = async (page = 0) => {
  const ITEMS_PER_PAGE = 90
  const htmlAsStr = await fetchHtml(ITEMS_PER_PAGE * page)
  const html = parse(htmlAsStr)

  const cards = html.querySelectorAll('[data-bi-ct="Product Card"]')
  return cards.map(card => {
    const title = card.getAttribute('data-bi-cn')
    const [prev, curr] = card.querySelector('[aria-hidden="true"]')?.querySelectorAll('span') ?? [null, null]
    return {
      title,
      prev: prev?.innerText,
      curr: curr?.innerText.replace('+', ''),
    }
  })
}

const fetchAllPages = async () => {
  const pages = await Promise.all([getPage(0), getPage(1), getPage(2), getPage(3)])

  const allStuff = pages.flatMap(x => x).map(x => `${x.title}: z ${x.prev} na ${x.curr}`)

  console.log(allStuff)
}

fetchAllPages()
