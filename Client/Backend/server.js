import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';


const app = express();
const PORT = process.env.PORT || 5001;


await connectDB();

app.listen(PORT, ()=> {
   console.log(`server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('hello world');
});