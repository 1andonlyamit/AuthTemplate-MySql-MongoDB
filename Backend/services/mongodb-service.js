import config from "../config/config.js"
import mongoose from "mongoose";

const MONGO_URL = config.mongodb_url;
const connectDB = async () => {
    try {
        mongoose.connect(MONGO_URL);
        console.log("Mongoose Connected.");
    } catch (error) {
        console.log("Connection Failed: ", error);
        process.exit(1)
    }
}

export default connectDB;