import createSecretToken from "../models/SecretToken.js";
import account from "../models/schemas/account.js";
import bcrypt from "bcrypt";


const Signup = async(req, res, next) => {
    try {
        const { first_name, last_name, email, password, createdAt } = req.body;

        const existingUser = await account.findOne({email})

        if (existingUser) {
            return res.json({message: "User already exists"})
        }

        const user = await account.create({first_name, last_name, email, password, createdAt});

        const token = createSecretToken(user._id);

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false
        });

        res
            .status(201)
            .json({mesage: "User signed in successfully", success: true, user})
        next();
    }
    catch(error) {
        console.error(error)
    }
}

const Login = async(req, res, next) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.json({message: 'All fields are required'})
        }

        const user = await account.findOne({ email })

        if(!user) {
            return res.json({message: 'Incorrect password or email'})
        }

        const auth = await bcrypt.compare(password, user.password)

        if(!auth) {
            return res.json({message: 'Incorrect password or email'})
        }

        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false
        })

        res.status(201).json({message: "User logged in successfully", success: true})
        next()
    }
    catch(error) {
        console.error(error)
    }
}

export { Signup, Login }