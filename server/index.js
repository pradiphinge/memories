import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv'

import connectDB from './db.js';

const app = express();

dotenv.config();
app.use(cors());

const PORT = process.env.PORT 
connectDB()

