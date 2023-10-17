// import * as dotenv from 'dotenv'
// dotenv.config()

const MONGO_USER = 'admin'
const MONGO_PASS = 'vdL1kZUDoCeSqaR0'
const MONGO_URL = 'tradehub.jvbeclf.mongodb.net'
const MONGO_DB = 'tradehub'
const API_PORT = 3719

const TOKEN_KEY = 'SULI'

const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_URL}/${MONGO_DB}?retryWrites=true&w=majority`

export { MONGO_URI, API_PORT, TOKEN_KEY }