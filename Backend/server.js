import express from 'express';
import connectDB from './services/mongodb-service.js';
import cors from 'cors'
import authRoute from './router/user_r.js'
import config from "./config/config.js"
const app = express();
const PORT = config.port;

app.use(cors());
app.use(express.json())

app.use("/user/auth", authRoute)

app.listen(PORT, async () => {
    console.log("Waiting for Mongodb connection...");
    await connectDB();
    console.log("Mongodb Connection Build Successfully!");
    console.log(`Amit's Auth Backend-Api running on https://localhost:${PORT}`);
})