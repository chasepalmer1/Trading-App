import * as dotenv from 'dotenv'
dotenv.config()

const MONGO_USER = process.env['MONGO_USER']
const MONGO_PASS = process.env['MONGO_PASS']
const MONGO_URL = process.env['MONGO_URL']
const MONGO_DB = process.env['MONGO_DB']
const API_PORT = process.env['API_PORT']

const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_URL}/${MONGO_DB}?retryWrites=true&w=majority`

export { MONGO_URI, API_PORT }