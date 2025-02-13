import { AxiosError } from 'axios';
import api from './api';
import { CookieService } from '../utils/cookie-service';
import { LoginCredentials, UserResponse } from '../types/auth';
import { ApiError } from '@/types/api';

export class AuthService {
  static async login(credentials: LoginCredentials): Promise<UserResponse> {
    try {
      const response = await api.post<UserResponse>('/auth', credentials);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      throw new Error(axiosError.response?.data?.message || 'Failed to login');
    }
  }

  static logout(): void {
    CookieService.deleteCookie('token');
  }
}

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      AuthService.logout();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);
