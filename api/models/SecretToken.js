import jsonwebtoken from "jsonwebtoken"
import { TOKEN_KEY } from "./constants.js"

const createSecretToken = (id) => {
    return jsonwebtoken.sign({ id }, TOKEN_KEY, {
        expiresIn: 3 * 24 * 60 * 60,
    })
}

export default createSecretToken