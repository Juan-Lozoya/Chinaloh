export interface User {
    id: number;
    username: string;
    email: string;
    user_type: string;
    hashed_pasword?: string;
}