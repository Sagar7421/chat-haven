import express, { Router } from 'express';
import { login, signup } from '../services/authenticationService';

const authRouter: Router = express.Router();

// Define the routes
authRouter.post('/signup', signup);
authRouter.post('/login', login);

export default authRouter;
