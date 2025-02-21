import { PostResponse, PostsFetchResponse } from '@/types/post';
import { User, userRoles } from '@/types/user';
import { create } from 'zustand';

export type SimpleUser = User & {
  role: userRoles;
  profilePicture: string;
  savedPosts: PostsFetchResponse | null;
  bloggerPosts: PostsFetchResponse | null;
};

type UserStore = {
  user: SimpleUser | null;
  setUser: (user: SimpleUser | null) => void;
  removeUser: () => void;
  addPostToSaved: (post: PostResponse) => void;
  removePostFromSaved: (postID: string) => void;
  setBloggerPosts: (posts: PostsFetchResponse) => void;
  addPostToBloggerPosts: (post: PostResponse) => void;
  removePostFromBloggerPosts: (postID: string) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  removeUser: () => set({ user: null }),
  addPostToSaved: (post) =>
    set((state) => {
      if (!state.user) return state;

      const currentSavedPosts = state.user.savedPosts;

      if (!currentSavedPosts) {
        return {
          user: {
            ...state.user,
            savedPosts: {
              data: [post],
              meta: {
                total: 1,
                page: 1,
                limit: 10,
                lastPage: 1,
              },
            },
          },
        };
      }

      const isPostAlreadySaved = currentSavedPosts.data.some(
        (savedPost) => savedPost.id === post.id,
      );

      if (isPostAlreadySaved) return state;

      return {
        user: {
          ...state.user,
          savedPosts: {
            ...currentSavedPosts,
            data: [post, ...currentSavedPosts.data],
            meta: {
              ...currentSavedPosts.meta,
              total: currentSavedPosts.meta.total + 1,
            },
          },
        },
      };
    }),

  removePostFromSaved: (postID) =>
    set((state) => {
      if (!state.user?.savedPosts) return state;

      const currentSavedPosts = state.user.savedPosts;

      const updatedPosts = currentSavedPosts.data.filter(
        (post) => post.id.toString() !== postID,
      );

      if (updatedPosts.length === currentSavedPosts.data.length) {
        return state;
      }

      return {
        user: {
          ...state.user,
          savedPosts: {
            ...currentSavedPosts,
            data: updatedPosts,
            meta: {
              ...currentSavedPosts.meta,
              total: currentSavedPosts.meta.total - 1,
            },
          },
        },
      };
    }),

  setBloggerPosts: (posts) =>
    set((state) => ({
      user: state.user ? { ...state.user, bloggerPosts: posts } : null,
    })),

  addPostToBloggerPosts: (post) =>
    set((state) => {
      if (!state.user) return state;

      const currentBloggerPosts = state.user.bloggerPosts;

      if (!currentBloggerPosts) {
        return {
          user: {
            ...state.user,
            bloggerPosts: {
              data: [post],
              meta: {
                total: 1,
                page: 1,
                limit: 10,
                lastPage: 1,
              },
            },
          },
        };
      }

      const isPostAlreadySaved = currentBloggerPosts.data.some(
        (savedPost) => savedPost.id === post.id,
      );

      if (isPostAlreadySaved) return state;

      return {
        user: {
          ...state.user,
          bloggerPosts: {
            ...currentBloggerPosts,
            data: [post, ...currentBloggerPosts.data],
            meta: {
              ...currentBloggerPosts.meta,
              total: currentBloggerPosts.meta.total + 1,
            },
          },
        },
      };
    }),

  removePostFromBloggerPosts: (postID) =>
    set((state) => {
      if (!state.user?.bloggerPosts) return state;

      const currentBloggerPosts = state.user.bloggerPosts;

      const updatedPosts = currentBloggerPosts.data.filter(
        (post) => post.id.toString() !== postID,
      );

      if (updatedPosts.length === currentBloggerPosts.data.length) {
        return state;
      }

      return {
        user: {
          ...state.user,
          bloggerPosts: {
            ...currentBloggerPosts,
            data: updatedPosts,
            meta: {
              ...currentBloggerPosts.meta,
              total: currentBloggerPosts.meta.total - 1,
            },
          },
        },
      };
    }),
}));
