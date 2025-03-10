import { useState, useCallback } from 'react';
import { LoginCredentials, UserResponse } from '../types/auth';
import { AuthService } from '@/services/auth-service';

export const useAuth = () => {
  const [user, setUser] = useState<Omit<UserResponse, 'accessToken'> | null>(
    null,
  );

  const login = useCallback(async (credentials: LoginCredentials) => {
    const userData = await AuthService.login(credentials);
    setUser(userData);
    return userData;
  }, []);

  const logout = useCallback(() => {
    AuthService.logout();
    setUser(null);
  }, []);

  return {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };
};
