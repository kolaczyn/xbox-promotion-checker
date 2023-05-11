import fs from 'fs/promises'
import { scrapeNumberOfPages, scrapePage } from './scrapePage'

const readHtml = async (htmlName: string) =>
  fs
    .readFile(`./src/infrastructure/scrapePage/${htmlName}`)
    .then(x => x.toString())

describe('scrapePage', () => {
  it('should retrieve correct game information', async () => {
    const html = await readHtml('cards-example.html')
    expect(scrapePage(html)).toMatchInlineSnapshot(`
      [
        {
          "currPrice": 134.99,
          "imageUrl": "https://store-images.s-microsoft.com/image/apps.47379.63407868131364914.bcaa868c-407e-42c2-baeb-48a3c9f29b54.89bb995b-b066-4a53-9fe4-0260ce07e894?q=90&w=256&h=384&mode=crop&format=jpg&background=%230078D7",
          "prevPrice": 269.99,
          "title": "Cyberpunk 2077",
          "url": "https://www.microsoft.com/pl-pl/p/cyberpunk-2077/bx3m8l83bbrw",
        },
        {
          "currPrice": 99.99,
          "imageUrl": "https://store-images.s-microsoft.com/image/apps.15193.65858607118306853.39ed2a08-df0d-4ae1-aee0-c66ffb783a34.7fe16441-021a-44c1-8af3-c7aa53940040?q=90&w=256&h=384&mode=crop&format=jpg&background=%230078D7",
          "prevPrice": 199.99,
          "title": "Wiedźmin 3: Dziki Gon – Edycja Kompletna",
          "url": "https://www.microsoft.com/pl-pl/p/wiedzmin-3-dziki-gon-edycja-kompletna/c261457lcnmj",
        },
        {
          "currPrice": 66.75,
          "imageUrl": "https://store-images.s-microsoft.com/image/apps.8266.14337700501983954.bd1bedb1-636e-4cb5-9fb9-6bda5bd998e8.cbfcac7c-2f17-4cdb-a1ca-e8e235900f30?q=90&w=256&h=384&mode=crop&format=jpg&background=%230078D7",
          "prevPrice": 89,
          "title": "Forza Horizon 5: Hot Wheels",
          "url": "https://www.microsoft.com/pl-pl/p/forza-horizon-5-hot-wheels/9pnsz7gmwcqz",
        },
      ]
    `)
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
