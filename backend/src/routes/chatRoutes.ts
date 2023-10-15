import express, { Router } from 'express';
import { getChatById, createChat, getChatsByIds } from '../services/chatService';
import { loginCheck } from '../middleware/auth';

const chatRouter: Router = express.Router();

chatRouter.get('/:chat_id', loginCheck, getChatById);
chatRouter.get('/chats', loginCheck, getChatsByIds);
chatRouter.post('/create', loginCheck, createChat);

export default chatRouter;