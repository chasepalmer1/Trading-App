import mongoose from "mongoose";
import bcrypt from "bcrypt";

const schema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "Your first name is required"]
    },
    last_name: {
        type: String,
        required: [true, "Your last name is required"]
    },
    email: {
        type: String,
        required: [true, "Your email address is required"]
    },
    password: {
        type: String,
        required: [true, "Your password is required"]
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    admin: {
        type: Boolean,
        required: false
    }
})

schema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12)
})

export default mongoose.model('users', schema)