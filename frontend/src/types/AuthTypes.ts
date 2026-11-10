import type { User } from "./User"

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    // isLoading: boolean;
}

export interface AuthResponse {
    success: boolean;
    message: string;
    data: {
        user: User;
    }
}