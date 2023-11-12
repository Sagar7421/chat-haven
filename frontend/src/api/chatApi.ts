import { AxiosResponse } from 'axios';
import { backendApi } from './baseAPI';

export const getChatsUserName = async(chatIds: any[], currentUserId: string): Promise<AxiosResponse> => {
    const data = {ids: chatIds, currentUser: currentUserId};
    return await backendApi.post("/chat/userNames", data);
  
  }

export const getChatData = async(chatid: string, currentUserId: string): Promise<AxiosResponse> => {

  const data = {chat_id: chatid, currentUser: currentUserId};
  return await backendApi.post("/chat", data);
}