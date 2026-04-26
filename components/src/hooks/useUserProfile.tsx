import { useState, useEffect } from 'react';
import { getUserProfile, getPortfolioSettings } from '../api';
import type { User, Portfolio } from '../types';

interface UserProfileData {
    user: User | null;
    portfolio: Portfolio | null;
}

export function useUserProfile() {
  const [data, setData] = useState<UserProfileData>({ user: null, portfolio: null });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setIsLoading(true);
        const [user, portfolio] = await Promise.all([
          getUserProfile(),
          getPortfolioSettings()
        ]);
        setData({ user, portfolio });
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch user profile'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  return { ...data, isLoading, error };
}