import express, { Router } from 'express';
import {getAllUsers, getUserById, getAllUserExceptCaller} from '../services/userService';
import { loginCheck } from '../middleware/auth';

const userRouter: Router = express.Router();

userRouter.get("/", loginCheck, getAllUsers);
userRouter.get("/:user_id", loginCheck, getUserById);
userRouter.get("/getUserList/:callerUserId", loginCheck, getAllUserExceptCaller);

export default userRouter;