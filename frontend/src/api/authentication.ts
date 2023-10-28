// src/api.ts
import { AxiosResponse } from 'axios';

import { backendApi } from './baseAPI';


interface User {
  username: string;
  email: string;
  password: string;
}

export const createUser = async (userData: User): Promise<AxiosResponse> => {
  return await backendApi.post('/auth/signup', userData);
};

export const loginUser = async (userData: User): Promise<AxiosResponse> => {
  const response =   await backendApi.post('/auth/login', userData);
  const token = response.data.token;
  localStorage.setItem('token', token);
  return response;
};
