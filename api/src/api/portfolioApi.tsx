import type { User, Project, PortfolioStats, Notification, Portfolio } from '../types';
import { 
    mockUser, 
    mockProjects, 
    mockStats, 
    mockNotifications, 
    mockPortfolio 
} from './mockData';

const MOCK_API_DELAY = 500;

const mockFetch = <T>(data: T): Promise<T> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data);
        }, MOCK_API_DELAY);
    });
};

export const getUser = (): Promise<User> => {
    return mockFetch(mockUser);
};

export const getProjects = (): Promise<Project[]> => {
    return mockFetch(mockProjects);
};

export const getPortfolioStats = (): Promise<PortfolioStats> => {
    return mockFetch(mockStats);
};

export const getNotifications = (): Promise<Notification[]> => {
    return mockFetch(mockNotifications);
};

export const getPortfolio = (slug: string): Promise<Portfolio> => {
    // In a real app, you would use the slug to fetch the correct portfolio
    console.log(`Fetching portfolio for slug: ${slug}`);
    return mockFetch(mockPortfolio);
};