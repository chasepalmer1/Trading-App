import jsonwebtoken from "jsonwebtoken"
import { TOKEN_KEY } from "../models/constants.js"
import account from "../models/schemas/account.js"

const userVerification = (req, res) => {
    const {token} = req.cookies

    if(!token) {
        return res.json({status: false})
    }

    jsonwebtoken.verify(token, TOKEN_KEY, async(err, data) => {
        if (err) {
            return res.json({status: false})
        }
        else {
            const user = await account.findById(data.id)
            if (user) {
              return res.json({status: true, user: user.email})
            } else {
              return res.json({status: false})
            }
        }
    })
}

export { userVerification }