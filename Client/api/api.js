import axios from "axios";

export const api = axios.create({
  baseURL: "https://gensler-lgb1.onrender.com",
  withCredentials: true,
});