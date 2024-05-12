import axios from "axios";
import { API_URL } from "./urls";
// import jsCookie from 'js-cookie';

const APIClientPrivate = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": true,
    // Authorization: `Bearer ${jsCookie.get("token")}`,
  },
  // withCredentials: true,
});

export const APIClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});

export default APIClientPrivate;
