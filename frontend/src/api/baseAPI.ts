import axios from "axios";

const API_BASE_URL = 'http://localhost:5001';

export const backendApi = axios.create({
    baseURL: API_BASE_URL,
  });