import { useState, useEffect } from 'react';
import { getPortfolioStats, getRecentProjects, getNotifications, getTopProjects } from '../api';
import type { PortfolioStats, Project, Notification } from '../types';

interface PortfolioData {
  stats: PortfolioStats | null;
  recentProjects: Project[];
  topProjects: Project[];
  notifications: Notification[];
}

export function usePortfolio() {
  const [data, setData] = useState<PortfolioData>({
    stats: null,
    recentProjects: [],
    topProjects: [],
    notifications: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setIsLoading(true);
        const [stats, recentProjects, topProjects, notifications] = await Promise.all([
          getPortfolioStats(),
          getRecentProjects(),
          getTopProjects(),
          getNotifications(),
        ]);
        setData({ stats, recentProjects, topProjects, notifications });
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch portfolio data'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  return { ...data, isLoading, error };
}