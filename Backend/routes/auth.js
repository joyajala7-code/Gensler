import express from 'express';
import User from '../Models/user.js';
import { protect } from '../Middleware/auth.js';
import jwt from 'jsonwebtoken';

const router = express.Router();
//register route
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
            if (!username || !email || !password) {
                return res.status(400).json({ message: 'All fields are required' });
        }
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

       const user = await User.create({ username, email, password });
       const token = generateToken(user._id);
       res.status(201).json({ 
        id: user._id,
        username: user.username,
        email: user.email,
        token,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
//login route
    router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
         if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
         }
         const user = await User.findOne({ email });

         if(!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
         }
          const token = generateToken(user._id);
         res.status(200).json({ 
            id: user._id,
            username: user.username,
            email: user.email,
            token,
         });
    }catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

//ME
router.get('/me', protect, async (req, res) => {
    
        res.status(200).json(req.user);
    
});

//generate token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
}

// GET all users - add this to Auth.js
router.get('/users', protect, async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

export default router;