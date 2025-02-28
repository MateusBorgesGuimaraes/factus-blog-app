import { Categories } from '@/components/pages/perfil/criar-post';
import { Author } from './user';

export interface CreatePost {
  title: string;
  content: string;
  category: Categories;
  coverImage: FileList | null;
}

export interface Meta {
  total: number;
  page: number;
  limit: number;
  lastPage: number;
}

export interface PostResponse {
  id: number;
  title: string;
  coverImage: string;
  category: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: Author;
}

export interface PostsFetchResponse {
  data: PostResponse[];
  meta: Meta;
}
