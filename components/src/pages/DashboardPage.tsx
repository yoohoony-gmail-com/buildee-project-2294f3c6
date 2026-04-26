import { usePortfolio } from '@/hooks/usePortfolio';
import { Link } from 'react-router-dom';

const formatViews = (views: number) => {
  if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`;
  }
  return views.toString();
};

export default function DashboardPage() {
  const { stats, recentProjects, topProjects, notifications, isLoading, error } = usePortfolio();

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen">Error: {error.message}</div>;
  }
  
  if (!stats || !recentProjects || !topProjects || !notifications) {
    return <div className="flex justify-center items-center min-h-screen">No data available.</div>;
  }

  return (
    <div className="min-h-screen bg-warm-950 text-warm-100 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="hero-orb bg-accent-blue w-96 h-96 -top-20 -left-20 animate-float" />
      <div className="hero-orb bg-accent-purple w-72 h-72 top-1/3 right-10 animate-float" style={{ animationDelay: '2s' }} />
      <div className="hero-orb bg-accent-rose w-80 h-80 bottom-0 left-1/4 animate-float" style={{ animationDelay: '4s' }} />

      {/* Grid texture overlay */}
      <div className="absolute inset-0 grid-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16 gap-6">
          <h1 className="gradient-text text-4xl md:text-5xl font-bold tracking-tight">
            내 포트폴리오 대시보드
          </h1>
          <div className="flex items-center gap-4">
            <button disabled className="glass-card px-4 py-2 rounded-full text-sm text-warm-300 flex items-center gap-2 hover:shadow-glow-blue disabled:opacity-50 disabled:cursor-not-allowed">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5l-3.3 3.3L18 10l3.3-3.3c.7-.7.7-1.7 0-2.4l-1.6-1.6c-.7-.7-1.7-.7-2.4 0zM11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/></svg>
              프로필 편집
            </button>
            <button disabled className="btn-premium bg-gradient-to-r from-accent-blue to-accent-purple text-white px-6 py-3 rounded-xl font-semibold shadow-glow-blue disabled:opacity-50 disabled:cursor-not-allowed">
              새 프로젝트 추가
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="glass-card p-6 text-center shadow-premium-sm">
            <div className="gradient-text text-4xl font-bold mb-1">{stats.totalProjects}</div>
            <div className="text-warm-500 text-sm uppercase tracking-wider">총 프로젝트</div>
          </div>
          <div className="glass-card p-6 text-center shadow-premium-sm">
            <div className="gradient-text text-4xl font-bold mb-1">{formatViews(stats.totalViews)}</div>
            <div className="text-warm-500 text-sm uppercase tracking-wider">총 조회수</div>
          </div>
          <div className="glass-card p-6 text-center shadow-premium-sm">
            <div className="gradient-text text-4xl font-bold mb-1">{stats.satisfaction}%</div>
            <div className="text-warm-500 text-sm uppercase tracking-wider">고객 만족도</div>
          </div>
          <div className="glass-card p-6 text-center shadow-premium-sm">
            <div className="gradient-text text-4xl font-bold mb-1">{stats.averageRating}</div>
            <div className="text-warm-500 text-sm uppercase tracking-wider">평균 별점</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Recent & Top Projects */}
            <div className="lg:col-span-2 space-y-12">
                <div>
                    <h2 className="text-2xl font-bold text-warm-200 mb-6">최근 프로젝트</h2>
                    <div className="space-y-4">
                        {recentProjects.map(project => (
                            <div key={project.id} className="glass-card p-4 flex items-center gap-4 hover:shadow-glow-purple transition-shadow duration-300">
                                <img src={project.imageUrl} alt={project.title} className="w-24 h-16 object-cover rounded-md flex-shrink-0" />
                                <div className="flex-grow">
                                    <h3 className="font-semibold text-warm-200">{project.title}</h3>
                                    <p className="text-sm text-warm-500 truncate">{project.description}</p>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <div className="font-bold text-lg text-warm-100">{formatViews(project.views)}</div>
                                    <div className="text-xs text-warm-500">Views</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-warm-200 mb-6">인기 프로젝트</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {topProjects.map(project => (
                            <div key={project.id} className="glass-card rounded-lg overflow-hidden group">
                                <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="p-4">
                                    <h3 className="font-semibold text-warm-200 truncate">{project.title}</h3>
                                    <div className="text-sm text-warm-500 flex justify-between items-center mt-2">
                                        <span>Views</span>
                                        <span className="font-semibold text-warm-300">{formatViews(project.views)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Notifications */}
            <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-warm-200 mb-6">알림</h2>
                <div className="glass-card p-4 space-y-4">
                    {notifications.map(notif => (
                        <div key={notif.id} className="flex items-start gap-3">
                            <img src={notif.user.avatarUrl} alt={notif.user.name} className="w-8 h-8 rounded-full mt-1 flex-shrink-0" />
                            <div>
                                <p className="text-sm text-warm-300">
                                    <span className="font-bold">{notif.user.name}</span>
                                    {notif.action}
                                </p>
                                <p className="text-xs text-warm-500 mt-1">{notif.timestamp}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
