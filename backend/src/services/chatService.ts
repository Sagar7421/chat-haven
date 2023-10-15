import { Request, Response } from 'express';
import Chat from '../models/chat';


// Create a new chat
const createChat = async (req: Request, res: Response) => {
  try {
    const { participants_ids } = req.body;

    // Ensure exactly 2 participants
    if (participants_ids.length !== 2) {
      return res.status(400).json({ message: 'A chat must have exactly 2 participants.' });
    }

    const chat = new Chat({ participants_ids });
    await chat.save();

    return res.status(201).json(chat);
  } catch (error) {
    console.error('Error creating chat:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


// Retrieve a chat by ID
const getChatById = async (req: Request, res: Response) => {
  try {
    const { chatId } = req.params;

    const chat = await Chat.findById(chatId);

    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }

    return res.json(chat);
  } catch (error) {
    console.error('Error fetching chat:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getChatsByIds = async (req: Request, res: Response) => {
  try{
    const {chatIds} = req.query;
    if(!chatIds){
      return res.status(401).json({message: 'Chat Ids required!'});
    }

    const chatIdsArray = Array.isArray(chatIds) ? chatIds : [chatIds];
    const chat = await Chat.find({chatId: {$in: chatIdsArray}}).exec();

  }catch (error) {
    console.error('Error fetching chats:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


export {createChat, getChatById, getChatsByIds}