import mongoose from "mongoose";
import { MONGO_URI } from "./constants.js";

const startMongo = async() => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('Successfully connected to MongoDB')
    }
    catch {
        console.log('Error Connecting to MongoDB')
    }
}

export default startMongo