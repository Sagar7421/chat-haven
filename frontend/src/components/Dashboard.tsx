import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchUser } from '../middlewares/userActions';

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.auth.userId);

  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch]);

  
  
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