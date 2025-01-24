import axios from "axios";
const url = import.meta.env.VITE_URL;
const bearerToken = localStorage.getItem("token") || "";

export const getBookingTime = async (date) => {
  try {
    const response = await axios.get(`${url}/booking/time?date=${date}`, {
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
export const createDataBooking = async (data) => {
  try {
    const response = await axios.post(`${url}/booking`, data, {
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
export const getDataBookingByUser = async (id) => {
  try {
    const response = await axios.get(`${url}/booking/${id}`, {
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
export const getDataBooking = async () => {
  try {
    const response = await axios.get(`${url}/booking`, {
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
export const updateStatus = async (id, data) => {
  try {
    const response = await axios.put(`${url}/booking/${id}`, data, {
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
export const deleteBooking = async (id) => {
  try {
    const response = await axios.delete(`${url}/booking/${id}`, {
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
