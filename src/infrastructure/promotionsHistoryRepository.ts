import { MongoClient } from 'mongodb'

/** @throws {Error} if env vars are not defined */
export const getMongoClient = async () => {
  const { MONGO_URL } = process.env
  if (MONGO_URL === undefined) {
    throw new Error('MONGO_URL is not set')
  }
  const client = new MongoClient(MONGO_URL)
  return client
}

const DB_NAME = 'lol'
const COLLECTION_NAME = 'xd'

type StoredGameInfo = {
  date: string
  gameUrl: string
}

export const getGamePromotionDate = (
  client: MongoClient,
  gameUrl: string
): Promise<string | null> =>
  client
    .db(DB_NAME)
    .collection(COLLECTION_NAME)
    .findOne<StoredGameInfo>({ gameUrl })
    // .findOne<{ date: string }>
    .then(x => x?.date ?? null)

type SetArgs = {
  gameUrl: string
  date: string
}

export const setGamePromotionDate = async (
  client: MongoClient,
  { date, gameUrl }: SetArgs
): Promise<void> => {
  await client
    .db(DB_NAME)
    .collection<StoredGameInfo>(COLLECTION_NAME)
    .insertOne({ date, gameUrl })
}
