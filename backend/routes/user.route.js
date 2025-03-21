import { Router } from "express";
import { login, adminLogin, register } from "../controllers/user.controllers.js";

const userRouter = Router();

userRouter.post('/login', login);

userRouter.post('/register', register);

userRouter.post('/admin', adminLogin);



export default userRouter;