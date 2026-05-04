import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = cookies.get<string>("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const original = error.config;

//     if (error.response?.status === 401 && !original._retry) {
//       original._retry = true;

//       try {
//         const { data } = await axios.post(
//           `${import.meta.env.VITE_API_URL}/auth/refresh`,
//           {},
//           { withCredentials: true },
//         );

//         cookies.set("access_token", data.access_token, {
//           path: "/",
//           secure: true,
//           sameSite: "strict",
//           maxAge: 60 * 60 * 24 * 1, // One day
//         });

//         original.headers.Authorization = `Bearer ${data.access_token}`;
//         return api(original);
//       } catch {
//         cookies.remove("access_token", { path: "/" });
//         cookies.remove("auth_user", { path: "/" });
//         window.location.href = "/login";
//       }
//     }

//     return Promise.reject(error);
//   },
// );
