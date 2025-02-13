export interface LoginCredentials {
  email: string;
  password: string;
}

export interface UserResponse {
  id: number;
  email: string;
  name: string;
  profilePicture: string;
  role: string;
}
