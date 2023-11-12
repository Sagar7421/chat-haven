import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchUser } from '../reducers/userActions';
import { SEND_WEBSOCKET_MESSAGE, REGISTER_SOCKET } from '../reducers/chatSlice';
import UserArea from './UserArea';
import ParticipantsArea from './ParticipantsArea';
import ChatArea from './ChatArea';

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.auth.userId);

  useEffect(() => {
    dispatch(fetchUser(id));
    console.log("sending call");
    /*const temp = { message: "hello there from react", sender_id: id, reciever_id: id, chat_id: id }
    dispatch(SEND_WEBSOCKET_MESSAGE(temp));
    console.log("call sent"); */

  }, [dispatch, id]);




  return (
    /*<div>
      <h1>Welcome to Your Dashboard</h1>
      <p>We will chat soon!</p>

      <h3>Hello ${user.username}</h3>
      <h3>${user.userId}</h3>
      <h3>${user.friends}</h3>
      <h3>${user.chats}</h3>
    </div> */
    
      <div className='container-fluid'> 
        <div className="row" >
          <div className="col-md-3">
            <div className="user-area">
              <UserArea />
            </div>
          </div>
          <div className="col-md-6">
            <div className="chat-area">
            <ChatArea />
            </div>
          </div>
          <div className="col-md-3">
            <div className="participents-area">
            <ParticipantsArea />
            </div>
          </div>
          
        </div>
        </div>
  );
};

export default Dashboard;