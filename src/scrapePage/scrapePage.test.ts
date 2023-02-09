import fs from 'fs/promises'
import { scrapePage } from './scrapePage'

describe('scrapePage', () => {
  it('should retrieve correct game information', async () => {
    const exampleHtml = await fs.readFile('./src/scrapePage/examplePage.html')
    expect(scrapePage(exampleHtml.toString())).toMatchSnapshot()
  })
})
