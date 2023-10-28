// src/api.ts
import { AxiosResponse } from 'axios';
import { backendApi } from './baseAPI';
import { UserInterface } from '../interfaces/interfaces';


export const getUserById = async (id: String): Promise<AxiosResponse> => {
  return await backendApi.get(`/user/${id}`);
};

