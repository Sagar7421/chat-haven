// src/components/LandingPage.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { createUser, loginUser } from '../api/authentication'; // Import your API functions

interface FormData {
  username: string;
  email: string;
  password: string;
}

const HomePage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
  });

  const [isLogin, setIsLogin] = useState<boolean>(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Handle login
        const response = await loginUser(formData);
        console.log('User logged in successfully:', response.data);
        // Redirect to the dashboard or perform other actions as needed
      } else {
        // Handle registration
        const response = await createUser(formData);
        console.log('User registered successfully:', response.data);
        // Redirect to the dashboard or perform other actions as needed
      }
    } catch (error) {
        if (error instanceof Error ){
            console.error('Error:', error.message);
        }
        else{
            console.error('Unidentified Error!');
        }
    }
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        )}
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Don\'t have an account? Sign up here.' : 'Already have an account? Log in here.'}
      </p>
    </div>
  );
};

export default HomePage;
