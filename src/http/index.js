import axios from "axios";

const api = axios.create({
  // baseURL: process.env.REACT_APP_API_BASE_URL,
  baseURL: 'https://api.quicksell.co/v1',
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export const getData = () => {
  return api.get("/internal/frontend-assignment");
};



export default api;