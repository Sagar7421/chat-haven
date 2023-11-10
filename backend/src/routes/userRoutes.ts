import express, { Router } from 'express';
import {getAllUsers, getUserById, getAllUserExceptCaller, getUserNameById} from '../services/userService';
import { loginCheck } from '../middleware/auth';

const userRouter: Router = express.Router();

// TODO: Add logincheck in the mix

userRouter.get("/users", getAllUsers);
userRouter.get("/:user_id", getUserById);
userRouter.get("/getUserList/:callerUserId", getAllUserExceptCaller);
userRouter.get("/username/:user_id", getUserNameById);

export default userRouter;