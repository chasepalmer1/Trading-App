import express from 'express'
import cors from 'cors'
import { API_PORT } from '../models/constants.js'
import account from '../models/schemas/account.js'
import startMongo from '../models/mongo.js'

const app = express()
startMongo()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/', cors(), (req, res) => {
    res.send('Hello World!')
})

// Login

app.post('/login', async(req, res) => {
    const {email, password} = req.body

    try {
        const check = await account.findOne({email: email})

        if(check) {
            res.json("NOT_FOUND")
        }
        else {
            res.json({error: 0, first_name: check.first_name})
        }
    }
    catch(e) {
        console.log(e)
        res.json("ERROR")
    }
})

// Login

// Register

app.post("/register", async(req, res) => {
    console.log(req)
    const {first_name, last_name, email, password} = req.body

    const data = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
    }

    try {
        const check = await account.findOne({email: email})

        if(check) {
            res.json("EMAIL_EXISTS")
        }
        else {
            res.json("ACCOUNT_CREATED")
            await account.insertMany([data])
        }
    }
    catch(e) {
        console.log(e)
        res.json("ERROR")
    }
})

// Register

app.listen(API_PORT, () => {
    console.log(`API is live on port: ${API_PORT}`)
})