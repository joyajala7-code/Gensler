import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config()
import { User }  from '../Models/user.js';

const secret = process.env.JWT_SECRET

export const checkToken = async (req, res, next) => {
    const token = req.cookies.token

    if (!token){
        return res.status(404).json({
            message: "Unauthorized, No token provided"
        });
    }

    const decoded = jwt.verify(token, secret)
       
        req.user = await User.findById(decoded.id).select("-password");

        if(!req.user){
            return res.status(401).json({
                message: "Unauthorized, User not found"
            });
        }
        next();

};