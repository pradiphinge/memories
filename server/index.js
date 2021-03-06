import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

import connectDB from './db.js';
import postRoutes from './routes/posts.js'

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use('/api/v1/posts', postRoutes);

if (process.env.NODE_ENVIRONMENT === 'development') {
    app.use(morgan('developmemt'));
}

const PORT = process.env.PORT 
connectDB()

app.listen(PORT,console.log(`server running on ${process.env.NODE_ENVIRONMENT} mode on port ${PORT}`.yellow.bold));