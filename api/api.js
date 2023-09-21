import express from 'express'
import cors from 'cors'
import { API_PORT } from './models/constants.js'
import startMongo from './models/mongo.js'
import cookieParser from 'cookie-parser'
import authRoute from './routes/AuthRoute.js'

const app = express()
startMongo()

app.listen(API_PORT, () => {
    console.log(`API is live on port: ${API_PORT}`)
})

app.use(express.json())

app.use(
    cors({
        origin: [`http://localhost:5173`],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    })
)

app.use(cookieParser())

app.use("/", authRoute)
