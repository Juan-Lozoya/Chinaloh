import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const COOKIE_TOKEN = "access_token";
const COOKIE_USER = "auth_user";

const COOKIE_OPTIONS = {
  path: "/",
  secure: true,
  sameSite: "strict" as const,
  maxAge: 60 * 60 * 24 * 1, // One day
};

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
}

function getInitialState(): AuthState {
  const token = cookies.get<string>(COOKIE_TOKEN);
  const user = cookies.get<AuthUser>(COOKIE_USER);

  if (token && user) {
    return { token, user, isAuthenticated: true };
  }

  return { token: null, user: null, isAuthenticated: false };
}

const authSlice = createSlice({
  name: "auth",
  initialState: getInitialState(),
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: AuthUser; token: string }>,
    ) => {
      const { user, token } = action.payload;

      // Guarda en Redux
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;

      // Guarda en cookies
      cookies.set(COOKIE_TOKEN, token, COOKIE_OPTIONS);
      cookies.set(COOKIE_USER, user, COOKIE_OPTIONS);
    },

    clearCredentials: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;

      cookies.remove(COOKIE_TOKEN, { path: "/" });
      cookies.remove(COOKIE_USER, { path: "/" });
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
