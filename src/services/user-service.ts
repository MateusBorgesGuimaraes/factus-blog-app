import { AxiosError } from 'axios';
import api from './api';
import { CreateUser, User } from '../types/user';
import { ApiResponse, ApiError } from '../types/api';

export class UserService {
  static async createUser(user: Omit<CreateUser, 'profilePicture'>) {
    try {
      const response = await api.post('/users/register', user);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      throw new Error(
        axiosError.response?.data?.message ||
          'Falha ao retgistrar novo usuario',
      );
    }
  }

  static async uploadUserProfileImage(formData: FormData) {
    try {
      const response = await api.post('/users/upload-profile', formData, {
        headers: {},
      });
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      throw new Error(
        axiosError.response?.data?.message ||
          'Falha ao fazer o upload da imagem',
      );
    }
  }
  static async getUsers(): Promise<User[]> {
    try {
      const response = await api.get<ApiResponse<User[]>>('/users');
      return response.data.data;
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      throw new Error(
        axiosError.response?.data?.message ||
          'Falha ao pegar todos os usuarios',
      );
    }
  }

  static async getUserById(id: number): Promise<User> {
    try {
      const response = await api.get<ApiResponse<User>>(`/users/${id}`);
      return response.data.data;
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      throw new Error(
        axiosError.response?.data?.message || 'Falha ao pegar usuario',
      );
    }
  }
}
