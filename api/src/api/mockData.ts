import type { User, Project, PortfolioStats, Notification, Portfolio } from '../types';

export const mockUser: User = {
  id: 'user-1',
  name: '김민준',
  email: 'minjun.kim@example.com',
  role: '디자이너, 프론트엔드 개발자',
  bio: '창의적인 웹 디자인과 사용자 경험에 열정을 가진 디자이너 겸 프론트엔드 개발자입니다. 시각적으로 매력적이고 기능적으로 뛰어난 디지털 경험을 만들어냅니다.',
  avatarUrl: 'https://images.unsplash.com/photo-1690191886622-033b7fd28648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGRlc2lnbiUyMHRlYW18ZW58MHwwfHx8MTc3NzEyNzc0MXww&ixlib=rb-4.1.0&q=80&w=1080',
};

export const mockProjects: Project[] = [
  {
    id: 'proj-1',
    title: '혁신적인 웹 디자인',
    description: '사용자 경험을 최적화한 반응형 웹 솔루션.',
    imageUrl: 'https://picsum.photos/seed/creative-portfolio-design-interior/600/400',
    views: 321,
  },
  {
    id: 'proj-2',
    title: '모바일 앱 개발',
    description: '직관적인 인터페이스와 강력한 기능의 앱.',
    imageUrl: 'https://picsum.photos/seed/creative-portfolio-design-detail/600/400',
    views: 987,
  },
  {
    id: 'proj-3',
    title: '브랜딩 및 로고 디자인',
    description: '기억에 남는 시각적 아이덴티티 구축.',
    imageUrl: 'https://picsum.photos/seed/creative-portfolio-design-team/600/400',
    views: 765,
  },
  {
    id: 'proj-4',
    title: '기업 웹사이트 리디자인',
    description: '최신 트렌드를 반영한 모던한 디자인.',
    imageUrl: 'https://picsum.photos/seed/corporate-website-redesign/600/400',
    views: 1230,
  },
  {
    id: 'proj-5',
    title: 'VR 체험 인터페이스',
    description: '몰입감 높은 가상현실 경험 제공.',
    imageUrl: 'https://picsum.photos/seed/vr-experience-interface/600/400',
    views: 612,
  },
];

export const mockStats: PortfolioStats = {
  totalProjects: 12,
  totalViews: 3500,
  satisfaction: 87,
  averageRating: 4.9,
};

export const mockNotifications: Notification[] = [
  {
    id: 'notif-1',
    user: {
      name: '김민준',
      avatarUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8MHx8fDE3NzcxMzIyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    action: "님이 '혁신적인 웹 디자인' 프로젝트에 새로운 피드백을 남겼습니다.",
    timestamp: '5분 전',
  },
  {
    id: 'notif-2',
    user: {
      name: '이수진',
      avatarUrl: 'https://images.unsplash.com/photo-1562788869-4ed32648eb72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVtYmVyfGVufDB8MHx8fDE3NzcxMzIyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    action: '님이 귀하의 포트폴리오를 공유했습니다.',
    timestamp: '1시간 전',
  },
  {
    id: 'notif-3',
    user: {
      name: '시스템',
      avatarUrl: 'https://picsum.photos/seed/client-avatar/100/100',
    },
    action: "'모바일 앱 개발' 프로젝트가 1000 조회수를 달성했습니다!",
    timestamp: '어제',
  },
];

export const mockPortfolio: Portfolio = {
    urlSlug: 'minjun-design',
    featuredProjects: [
        { id: 'proj-1', title: '프로젝트 A', imageUrl: 'https://images.unsplash.com/photo-1734009617600-ff7b688d4a72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGRlc2lnbiUyMGludGVyaW9yfGVufDB8MHx8fDE3NzcxMjc3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
        { id: 'proj-2', title: '프로젝트 B', imageUrl: 'https://images.unsplash.com/photo-1516906736502-5d3fedc3019a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGRlc2lnbiUyMGRldGFpbHxlbnwwfDB8fHwxNzc3MTI3NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080' },
        { id: 'proj-3', title: '프로젝트 C', imageUrl: 'https://images.unsplash.com/photo-1660760144108-bdfb501b4941?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGRlc2lnbiUyMGFic3RyYWN0fGVufDB8MHx8fDE3NzcxMzIyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    ]
};