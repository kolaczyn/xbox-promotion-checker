import fs from 'fs/promises'

export const readWatchList = () =>
  fs.readFile('./watchlist.txt').then(x => x.toString().split('\n'))
