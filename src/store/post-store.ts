import { create } from 'zustand';
import { PostsFetchResponse } from '@/types/post';

interface PostsCache {
  [key: string]: PostsFetchResponse;
}

interface PostsState {
  postsCache: PostsCache;
  setPostsCache: (key: string, data: PostsFetchResponse) => void;
}

export const usePostsStore = create<PostsState>((set) => ({
  postsCache: {},
  setPostsCache: (key, data) =>
    set((state) => ({
      postsCache: { ...state.postsCache, [key]: data },
    })),
}));
