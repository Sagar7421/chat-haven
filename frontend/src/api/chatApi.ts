import { AxiosResponse } from 'axios';
import { backendApi } from './baseAPI';

export const getChatsUserName = async(chatIds: any[], currentUserId: string): Promise<AxiosResponse> => {
    const data = {ids: chatIds, currentUser: currentUserId};
    return await backendApi.post("/chat/userNames", data);
  
  }