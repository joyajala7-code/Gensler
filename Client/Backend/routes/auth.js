import express from 'express';
import user from '../Models/user.js';

const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
            if (!username || !email || !password) {
                return res.status(400).json({ message: 'All fields are required' });
        }
        const userExists = await user.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
       const user = await user.create({ username, email, password });
       res.status(201).json({ 
        id: user._id,
        username: user.username,
        email: user.email
        
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

export default router;