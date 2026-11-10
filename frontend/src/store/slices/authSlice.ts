import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "@/types/User";
import type { AuthState } from "@/types/AuthTypes";

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  // isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    clearAuth: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const {
  setUser,
  clearAuth,
} = authSlice.actions;

export default authSlice.reducer;
