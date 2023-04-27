import fs from 'fs/promises'
import { scrapeNumberOfPages, scrapePage } from './scrapePage'

const readHtml = async (htmlName: string) =>
  fs
    .readFile(`./src/infrastructure/scrapePage/${htmlName}`)
    .then(x => x.toString())

describe('scrapePage', () => {
  it('should retrieve correct game information', async () => {
    const html = await readHtml('cards-example.html')
    expect(scrapePage(html)).toMatchSnapshot()
  })
})

describe('scrapeNumberOfPages', () => {
  it('should get number of pages', async () => {
    const html = await readHtml('pagination-example.html')
    expect(scrapeNumberOfPages(html)).toEqual(6)
  })
  it('should return null if no element on the page', () => {
    const html = '<h1>hi mom</h1>'
    expect(scrapeNumberOfPages(html)).toBeNull()
  })
})
