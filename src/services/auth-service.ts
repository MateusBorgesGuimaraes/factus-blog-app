import { AxiosError } from 'axios';
import api from './api';
import { LoginCredentials, UserResponse } from '../types/auth';
import { ApiError } from '@/types/api';

export class AuthService {
  static async login(
    credentials: LoginCredentials,
  ): Promise<Omit<UserResponse, 'accessToken'>> {
    try {
      const response = await api.post<UserResponse>('/auth', credentials);

      document.cookie = `token=${response.data.accessToken}; path=/; secure; samesite=strict`;

      api.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${response.data.accessToken}`;

      const { accessToken, ...userData } = response.data;
      return userData;
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      throw new Error(axiosError.response?.data?.message || 'Failed to login');
    }
  }

  static logout(): void {
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';

    delete api.defaults.headers.common['Authorization'];
  }
}
