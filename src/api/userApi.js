import axios from "axios";
const url = import.meta.env.VITE_URL;
const bearerToken = localStorage.getItem("token") || "";

export const getDataUser = async () => {
  try {
    const response = await axios.get(`${url}/user`, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
