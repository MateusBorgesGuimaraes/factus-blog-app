import { CreatePost, PostResponse, PostsFetchResponse } from '@/types/post';
import api from './api';
import { AxiosError } from 'axios';
import { ApiError } from '@/types/api';

export class PostService {
  static async createPost(post: Omit<CreatePost, 'coverImage'>) {
    try {
      const response = await api.post('/posts/create', post);

      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      throw new Error(
        axiosError.response?.data?.message || 'Falha ao criar novo post',
      );
    }
  }

  static async uploadUCoverImage(formData: FormData, postID: string) {
    try {
      const response = await api.post(
        `/posts/upload-cover/${postID}`,
        formData,
        {
          headers: {},
        },
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      throw new Error(
        axiosError.response?.data?.message ||
          'Falha ao fazer o upload da imagem',
      );
    }
  }

  static async getPostById(postID: string): Promise<PostResponse> {
    try {
      const response = await api.get(`/posts/${postID}`);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      throw new Error(
        axiosError.response?.data?.message || 'Falha ao pegar post',
      );
    }
  }

  static async getPostsWithPagination(
    page: number,
    limit: number,
  ): Promise<PostsFetchResponse[]> {
    try {
      const reponse = await api.get(`/posts?page=${page}&limit=${limit}`);

      return reponse.data;
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      throw new Error(
        axiosError.response?.data?.message || 'Falha ao pegar posts',
      );
    }
  }
}
