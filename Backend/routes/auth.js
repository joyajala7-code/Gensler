import { Router } from "express";
import { getHome, getAbout, getGoals, postUser, Login, getAllUsers, getSingleUser, deleteSingle, logout } from "../controller/userController.js";
import { checkToken } from "../Middleware/auth.js";
 
const router = Router();
 
router
    .get('/', getHome)
    .get('/about', getAbout)
    .get('/goals', getGoals)
    .post('/register', postUser)
    .post('/login', Login)
    .get('/logout', logout)
    .get('/users', checkToken, getAllUsers)
    .get('/user/:id', checkToken, getSingleUser)
    .delete('/delete-user/:id', deleteSingle);
 
export default router;