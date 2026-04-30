import { mockUser, mockProjects, mockStats, mockNotifications, mockPortfolio } from './mockData';
import type { User, Project, PortfolioStats, Notification, Portfolio } from '../types';

const MOCK_API_DELAY = 500; // 500ms delay

const fetchWithDelay = <T extends {}>(data: T): Promise<T> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, MOCK_API_DELAY);
  });
};

export const getUserProfile = (): Promise<User> => {
  return fetchWithDelay(mockUser);
};

export const getPortfolioSettings = (): Promise<Portfolio> => {
    return fetchWithDelay(mockPortfolio);
}

export const getPortfolioStats = (): Promise<PortfolioStats> => {
  return fetchWithDelay(mockStats);
};

export const getRecentProjects = (): Promise<Project[]> => {
  return fetchWithDelay(mockProjects.slice(0, 3));
};

export const getTopProjects = (): Promise<Project[]> => {
    const sorted = [...mockProjects].sort((a, b) => b.views - a.views);
    return fetchWithDelay(sorted.slice(0, 4));
}

export const getNotifications = (): Promise<Notification[]> => {
  return fetchWithDelay(mockNotifications);
};

export const updateUserProfile = async (userData: Partial<User>): Promise<User> => {
    console.log('Updating user profile with:', userData);
    const updatedUser = { ...mockUser, ...userData };
    return fetchWithDelay(updatedUser);
};
