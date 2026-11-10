import { api } from "./api";
import type { AuthResponse } from "@/types/AuthTypes";
import type { LoginRequest } from "@/types/Login";

export const authService = {
  login: async (credentials: LoginRequest): Promise<AuthResponse> => {
    const { data } = await api.post<AuthResponse>(
      "/login",
      credentials
    );
    return data;
  },

  // me: async () => {
  //   const { data } = await api.get<AuthResponse>("/auth/me");

  //   return data.data.user;
  // },

  // logout: async () => {
  //   await api.post("/auth/logout");
  // },
};
