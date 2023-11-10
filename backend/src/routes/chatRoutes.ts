import express, { Router } from 'express';
import { getChatById, createChat, getChatsByIds, getChatsUserNames } from '../services/chatService';
import { loginCheck } from '../middleware/auth';

const chatRouter: Router = express.Router();

chatRouter.get('/:chat_id', getChatById);
chatRouter.get('/chats', getChatsByIds);
chatRouter.post('/create', createChat);
chatRouter.post('/userNames', getChatsUserNames);

export default chatRouter;