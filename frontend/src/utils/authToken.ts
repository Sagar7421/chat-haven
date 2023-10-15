import axios from 'axios';

// Function to set the JWT token in Axios headers
export const setAuthToken = (token: string | null) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Remove the token from headers if it's null or undefined
    delete axios.defaults.headers.common['Authorization'];
  }
};