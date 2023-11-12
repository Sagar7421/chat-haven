import mongoose from 'mongoose';
import Message from '../models/message';

const createMessage = async (message: String, sender: String, chatid: String) => {

    try{
        const msg = new Message({content: message, sender_id: sender, chat_id: chatid });
        await msg.save();

        return msg.timestamp;
    }
    catch (error) {
        console.error('Error creating message:', error);
        return null;
    }
};

/**
 * Resolves message_ids to entire message object
 * @param message_ids List of message ids in string format
 * @returns 
 */
const resolveMessages = async (message_ids: string[]) => {
    try{
        let result = [];

        for (const m_id of message_ids){
            const t = new mongoose.Types.ObjectId(m_id);
            const message = await Message.findById(t);
            if (message){
                result.push({sender_id: message.sender_id, content: message.content, message_id: message._id, timestamp: message.timestamp});
            }
        }
        return result;
  
    } catch (error) {
      console.log("Error in revoling messages: ", error);
      return [];
    }
  };

export {createMessage, resolveMessages}