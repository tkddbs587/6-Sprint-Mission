import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API;

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;

// export const privateApi = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//   },
// });
