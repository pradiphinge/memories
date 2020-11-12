import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv'

import connectDB from './db.js';
import postRoutes from './routes/posts.js'

const app = express();
app.use('/posts', postRoutes);

dotenv.config();
app.use(cors());


const PORT = process.env.PORT 
connectDB()

app.listen(PORT,console.log(`server running on ${process.env.NODE_ENVIRONMENT} mode on port ${PORT}`.yellow.bold));