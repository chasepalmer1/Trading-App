import mongoose from "mongoose";
import { MONGO_URI } from "./constants";

try {
    await mongoose.connect(MONGO_URI)
    console.log('Successfully connected to MongoDB')
}
catch {
    console.log('Error Connecting to MongoDB')
}