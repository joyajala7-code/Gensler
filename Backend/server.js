import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import cookieParser from 'cookie-parser';




const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://gensler-git-main-damilolas-projects-8f12e9d2.vercel.app',
    'https://gensler-gfeod02m4-damilolas-projects-8f12e9d2.vercel.app',
    'https://gensler-beta.vercel.app'
  ],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

// ✅ Connect first, then start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to MongoDB:', err);
  process.exit(1);
});



