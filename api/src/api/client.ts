export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  if (import.meta.env.DEV) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Lazy load mock data to avoid circular dependencies if any
    const { 
      mockUser, 
      mockProjects, 
      mockStats, 
      mockNotifications, 
      mockPortfolio 
    } = await import('./mockData');

    if (endpoint === '/user') return mockUser as T;
    if (endpoint === '/projects') return mockProjects as T;
    if (endpoint === '/stats') return mockStats as T;
    if (endpoint === '/notifications') return mockNotifications as T;
    if (endpoint.startsWith('/portfolio/')) return mockPortfolio as T;
    
    throw new ApiError(404, `Mock endpoint not found: ${endpoint}`);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'An unknown error occurred' }));
    throw new ApiError(response.status, errorData.message || response.statusText);
  }

  return response.json();
}

export default apiFetch;