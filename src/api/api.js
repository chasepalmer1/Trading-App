import express from 'express'
import cors from 'cors'
import { API_PORT } from '../models/constants.js'
import account from '../models/schemas/account.js'

const app = express()
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
    catch {
        res.json("ERROR")
    }
})

// Login

// Register

app.post("/register", async(req, res) => {
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
    catch {
        res.json("ERROR")
    }
})

// Register

app.listen(API_PORT, () => {
    console.log(`API is live on port: ${API_PORT}`)
})