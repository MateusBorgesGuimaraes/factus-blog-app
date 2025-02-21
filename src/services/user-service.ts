import { AxiosError } from 'axios';
import api from './api';
import { CreateUser, User } from '../types/user';
import { ApiResponse, ApiError } from '../types/api';
import { PostsFetchResponse } from '@/types/post';

export class UserService {
  static async createUser(user: Omit<CreateUser, 'profilePicture'>) {
    try {
      const response = await api.post('/users/register', user);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      throw new Error(
        axiosError.response?.data?.message || 'Falha ao registrar novo usuario',
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

  static async getPostsSavedByUser(): Promise<PostsFetchResponse> {
    try {
      const response = await api.get(`/users/saved-posts`);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      throw new Error(
        axiosError.response?.data?.message || 'Falha ao pegar usuario',
      );
    }
  }

  static async savePost(postId: number) {
    try {
      await api.post(`/users/saved-posts/${postId}`);
      return true;
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      throw new Error(
        axiosError.response?.data?.message || 'Falha ao salvar post',
      );
    }
  }

  static async removePostFromSaved(postId: number) {
    try {
      await api.delete(`/users/saved-posts/${postId}`);
      return true;
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      throw new Error(
        axiosError.response?.data?.message || 'Falha ao remover post',
      );
    }
  }

  static async getAuthorPosts(): Promise<PostsFetchResponse> {
    try {
      const response = await api.get('/users/blogger/posts');
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      throw new Error(
        axiosError.response?.data?.message || 'Falha ao pegar posts do autor',
      );
    }
  }
}
