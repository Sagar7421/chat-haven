import { Request, Response } from 'express';
import Chat from '../models/chat';
import User from '../models/user';
import mongoose from 'mongoose';


// Create a new chat
// Tested and Working
const createChat = async (req: Request, res: Response) => {
  try {
    const { participants_ids } = req.body;

    // Ensure exactly 2 participants
    if (participants_ids.length !== 2) {
      return res.status(400).json({ message: 'A chat must have exactly 2 participants.' });
    }

    const chat = new Chat({participants_ids: participants_ids });
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


const getChatsUserNames = async(req: Request, res: Response) => {
  try{

    const chatids = req.body.ids;
    const currentUser = req.body.currentUser;

    //First get all chats
    const chats = await Chat.find({_id: {$in: chatids.map((id: string) => new mongoose.Types.ObjectId(id))}})
    .select('_id participants_ids')
    .lean()
    .exec();

    // Remove current userId from participants list
    const participantIdsMap: { [chatId: string]: string} = {};
    chats.forEach(chat => {
      for (const partId of chat.participants_ids){
        if (partId.toString() !== currentUser){
          participantIdsMap[chat._id.toString()] = partId.toString();
          break;
        }
      } 
    });

    const resultMap: {[chatId: string]: {user_id: string, username: string}} = {};
    const tempChats = Object.keys(participantIdsMap).flat();

    // Find users from participant ids
    const promises = tempChats.map(async chat => {
      const p_id = participantIdsMap[chat];
      const p_id_object = new mongoose.Types.ObjectId(p_id);
      const tempRes = await User.findById(p_id_object);

      if(tempRes){
        resultMap[chat] = {user_id: p_id, username: tempRes.username};
      }
    })

    await Promise.all(promises);


    return res.status(200).json(resultMap);

  } catch (error){
    console.error('Error in getChatsUserNames: ', error);
    return res.status(500).json({ message: 'Internal server error'});
  }
}


export {createChat, getChatById, getChatsByIds, getChatsUserNames}