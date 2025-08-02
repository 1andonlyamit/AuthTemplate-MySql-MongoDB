//i have created routes same for the both type of database connection
import express from 'express';
import { registerUser } from '../controller/mongo-user_c.js';
const router = express.Router();

router.post("/register", registerUser)

export default router;