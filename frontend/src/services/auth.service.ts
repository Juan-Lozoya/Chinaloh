import { api } from "./api";
import { setCredentials, clearCredentials } from "../store/slices/authSlice";
import type { AppDispatch } from "../store";

export const authService = {
  login: async (dispatch: AppDispatch, email: string, password: string) => {
    const { data } = await api.post("/auth/login", { email, password });
    dispatch(setCredentials({ user: data.user, token: data.access_token }));
    return data.user;
  },

  logout: (dispatch: AppDispatch) => {
    dispatch(clearCredentials());
    window.location.href = "/login";
  },
};
