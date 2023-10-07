// src/api.ts
import axios, { AxiosResponse } from 'axios';


const API_BASE_URL = 'http://localhost:5001'; // Replace with your backend server URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

interface User {
  username: string;
  email: string;
  password: string;
}

export const createUser = async (userData: User): Promise<AxiosResponse> => {
  return await api.post('/auth/signup', userData);
};

export const loginUser = async (userData: User): Promise<AxiosResponse> => {
  const response =   await api.post('/auth/login', userData);
  const token = response.data.token;
  localStorage.setItem('token', token);
  return response;
};
