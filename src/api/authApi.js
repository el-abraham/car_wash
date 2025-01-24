import axios from "axios";
const url = import.meta.env.VITE_URL;

export const register = async (data) => {
  try {
    const response = await axios.post(`${url}/auth/register`, data);
    return response.data;
  } catch (error) {
    console.error("Error creating data:", error);
    throw error;
  }
};
export const login = async (data) => {
  try {
    const response = await axios.post(`${url}/auth/login`, data);
    return response.data;
  } catch (error) {
    console.error("Error creating data:", error);
    throw error;
  }
};
