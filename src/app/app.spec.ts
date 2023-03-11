import { GameInfo } from '../types'
import { app } from './app'

it('doesnt do the strategy nor send the message, if there are no games', async () => {
  const getGames = jest.fn(() => Promise.resolve([]))
  const gamesStrategy = jest.fn()
  const sendMessage = jest.fn()

  await app({
    getGames,
    gamesStrategy,
    sendMessage,
  })

  expect(getGames).toHaveBeenCalled()
  expect(gamesStrategy).not.toHaveBeenCalled()
  expect(sendMessage).not.toHaveBeenCalled()
})

it('uses the strategy and sends the message if there are games', async () => {
  const game = { title: 'Title' } as GameInfo
  const gamesStrategy = jest.fn((x: GameInfo[]) =>
    Promise.resolve(x.map(x => x.title))
  )
  const sendMessage = jest.fn()

  await app({
    getGames: () => Promise.resolve([game]),
    gamesStrategy,
    sendMessage,
  })

  expect(gamesStrategy).toHaveBeenCalled()
  expect(sendMessage).toHaveBeenCalledWith(['Title'])
})
