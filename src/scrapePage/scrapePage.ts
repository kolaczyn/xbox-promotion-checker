import parse, { HTMLElement } from 'node-html-parser'
import { GameInfo } from '../types'

const scrapeCard = (card: HTMLElement): GameInfo => {
  const title = card.getAttribute('data-bi-cn')
  const [prevEl, currEl] = card
    .querySelector('[aria-hidden="true"]')
    ?.querySelectorAll('span') ?? [null, null]

  const dunno = '<dunno>'
  return {
    title: title ?? dunno,
    prev: prevEl?.innerText ?? dunno,
    curr: currEl?.innerText.replace('+', '') ?? dunno,
  }
}

export const scrapePage = (html: string): GameInfo[] =>
  parse(html).querySelectorAll('[data-bi-ct="Product Card"]').map(scrapeCard)

export const scrapeNumberOfPages = (html: string): number | null => {
  const paginationElements = parse(html).querySelectorAll('.page-item')
  return paginationElements.length > 0
    ? // `-2`, because of the 'next' and 'previous' links on the page
      paginationElements.length - 2
    : null
}
