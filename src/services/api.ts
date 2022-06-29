import axios from "axios";

export const api = axios.create({
  baseURL: "https://randomuser.me/api",
  headers: {
    "Content-Type": "applocation/json",
    accept: "applocation/json",
  },
});
