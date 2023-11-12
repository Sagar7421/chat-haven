import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getChatList, initializeChat } from '../reducers/chatActions';
import { ListGroup } from 'react-bootstrap';

const UserArea: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const chatData = useAppSelector((state) => state.chatList);

  useEffect(() => {

    dispatch(getChatList({ chatids: user.chats, currentUserId: user.userId }));

  }, [dispatch, user]);

  const handleChatClick = (chatId: string) => {
    dispatch(initializeChat({ chatid: chatId, currentUserId: user.userId }));
  };


  return (
    <div>
      <h2>Chats</h2>
      <ListGroup>
        {chatData.chats.map((chat, index) => (
          <ListGroup.Item key={index} onClick={() => handleChatClick(chat.chatId)}>
            <div>Username data {chat.chatUserName}</div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default UserArea;