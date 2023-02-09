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

export const scrapePage = (page: string) =>
  parse(page).querySelectorAll('[data-bi-ct="Product Card"]').map(scrapeCard)
