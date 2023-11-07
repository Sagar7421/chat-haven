import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchUser } from '../middlewares/userActions';
import { SEND_WEBSOCKET_MESSAGE, REGISTER_SOCKET } from '../reducers/chatSlice';

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.auth.userId);

  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    //dispatch(fetchUser(id));
    console.log("sending call");
    const temp = {message: "hello there from react", sender_id: id, reciever_id: id, chat_id: id}
    dispatch(SEND_WEBSOCKET_MESSAGE(temp));
    console.log("call sent");
    // Clear the timeout to prevent it from firing if the component unmounts before the timeout is reached

  }, [dispatch, id]);


  
  
  return (
    <div>
      <h1>Welcome to Your Dashboard</h1>
      <p>We will chat soon!</p>

      <h3>Hello ${user.username}</h3>
      <h3>${user.userId}</h3>
      <h3>${user.friends}</h3>
      <h3>${user.chats}</h3>
    </div>
  );
};

export default Dashboard;