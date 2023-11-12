import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { initializeChat } from '../reducers/chatActions';

const ChatArea: React.FC = () => {
  const dispatch = useAppDispatch();
  const chatOnTop = useAppSelector((state) => state.chatList.chats.at(0)?.chatId);
  const userid = useAppSelector((state) => state.user.userId);
  const currentChat = useAppSelector((state) => state.chatSlice);

  useEffect(() => {
    if (chatOnTop){
      dispatch(initializeChat({chatid: chatOnTop, currentUserId: userid}));
    }
    
    
  }, [dispatch, chatOnTop]);


  return (
    <div className="container">
    <h2> Chat-name {currentChat.chatName}</h2>
    <div className="card-container">
      {currentChat.messages.map((msg, index) => (
        <div className="card" key={index}>
          <h3>Message content: {msg.content}</h3>
          <h3>Message sender:  {msg.sender_id}</h3>
          <h3>message id: {msg.message_id}</h3>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ChatArea;



