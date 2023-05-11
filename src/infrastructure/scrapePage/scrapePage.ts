import parse, { HTMLElement } from 'node-html-parser'
import { GameInfo } from '../../types'
import { priceToNumber } from '../../utils/priceToNumber'

const extractNumberFromPrice = (str: string) =>
  str.replace(/&nbsp;|zł|\s|\+/g, '')

const scrapeCard = (card: HTMLElement): GameInfo | null => {
  const title = card.getAttribute('data-bi-cn')

  const prevEl = card.querySelector('.text-line-through.text-muted')
  const currEl = card.querySelector('.font-weight-semibold')

  const url = card.querySelector('a')?.getAttribute('href')
  const imageUrl = card.querySelector('img')?.getAttribute('src')

  const prevPriceStr = extractNumberFromPrice(prevEl?.innerText ?? '')
  const currPriceStr = extractNumberFromPrice(currEl?.innerText ?? '')

  const prevPrice = priceToNumber(prevPriceStr ?? '')
  const currPrice = priceToNumber(currPriceStr ?? '')

  if (!title || !prevPrice || !currPrice || !url || !imageUrl) {
    return null
  }

  return {
    title,
    prevPrice,
    currPrice,
    url,
    imageUrl,
  }
}

export const scrapePage = (html: string): GameInfo[] =>
  parse(html)
    .querySelectorAll('[data-bi-ct="Product Card"]')
    .map(scrapeCard)
    .filter((x): x is GameInfo => x !== null)

export const scrapeNumberOfPages = (html: string): number | null => {
  const paginationElements = parse(html).querySelectorAll('.page-item')
  return paginationElements.length > 0
    ? // `-2`, because of the 'next' and 'previous' links on the page
      paginationElements.length - 2
    : null
}
