import { User, userRoles } from '@/types/user';
import { create } from 'zustand';

export type SimpleUser = User & {
  role: userRoles;
  profilePicture: string;
};

type UserStore = {
  user: SimpleUser | null;
  setUser: (user: SimpleUser | null) => void;
  removeUser: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  removeUser: () => set({ user: null }),
}));
