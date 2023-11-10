import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getChatList } from '../reducers/chatActions';

const UserArea: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const chatData = useAppSelector((state) => state.chatList);

  useEffect(() => {
    
    dispatch(getChatList({chatids: user.chats, currentUserId: user.userId}));

  }, [dispatch, user]);

  return (
    <div className="container">
      <h2> This is user area</h2>
      <div className="card-container">
        {chatData.chats.map((chat, index) => (
          <div className="card" key={index}>
            <h2>Username data {chat.chatUserName}</h2>
            <h2>Chat ID data {chat.chatId}</h2>
            <h3>Chat User ID data {chat.chatUserId}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserArea;