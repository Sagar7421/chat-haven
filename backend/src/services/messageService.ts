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

export {createMessage}