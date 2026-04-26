export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  bio: string;
  avatarUrl: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  views: number;
}

export interface PortfolioStats {
  totalProjects: number;
  totalViews: number;
  satisfaction: number; // as percentage
  averageRating: number; // out of 5
}

export interface Notification {
  id: string;
  user: {
    name: string;
    avatarUrl: string;
  };
  action: string;
  timestamp: string; // e.g., "5분 전", "1시간 전"
}

export interface Portfolio {
  urlSlug: string;
  featuredProjects: Pick<Project, 'id' | 'title' | 'imageUrl'>[];
}