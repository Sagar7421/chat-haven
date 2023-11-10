// src/api.ts
import { AxiosResponse } from 'axios';
import { backendApi } from './baseAPI';


export const getUserById = async (id: string): Promise<AxiosResponse> => {
  return await backendApi.get(`/user/${id}`);
};
