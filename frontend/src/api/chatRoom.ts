import axios, { AxiosResponse } from 'axios';
import { setAuthToken } from '../utils/authToken';

const API_BASE_URL = 'http://localhost:5001'; // Replace with your backend server URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

interface ChatUser {
    userId: string,
    username: string;
  }



export const getChatList = async (userData: ChatUser): Promise<AxiosResponse> => {
    return await api.post('/chatRoom', userData)
};