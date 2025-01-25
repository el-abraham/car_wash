import axios from "axios";
const url = import.meta.env.VITE_URL;
const bearerToken = localStorage.getItem("token");

export const getDataPackage = async () => {
  try {
    const response = await axios.get(`${url}/package`, {
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
export const createDataPackage = async (data) => {
  try {
    const response = await axios.post(`${url}/package`, data, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating data:", error);
    throw error;
  }
};
export const updateDataPackage = async (id, data) => {
  try {
    const response = await axios.put(`${url}/package/${id}`, data, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating data:", error);
    throw error;
  }
};
export const deleteDataPackage = async (id) => {
  try {
    const response = await axios.delete(`${url}/package/${id}`, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating data:", error);
    throw error;
  }
};
