import { Link } from 'react-router-dom';
import { mockProjects, mockStats, mockNotifications } from '@/api/mockData';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-warm-950 text-white font-sans">
      <header className="sticky top-0 z-50 bg-warm-950/90 backdrop-blur-md border-b border-warm-800/50">
        <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="gradient-text font-bold text-lg">Site</Link>
          <div className="flex items-center gap-1">
            <Link to="/" className="text-warm-400 hover:text-white transition-colors px-3 py-2 text-sm">Home</Link>
            <Link to="/dashboard" className="text-white font-semibold border-b-2 border-accent-blue px-3 py-2 text-sm">Dashboard</Link>
            <Link to="/settings" className="text-warm-400 hover:text-white transition-colors px-3 py-2 text-sm">Settings</Link>
          </div>
        </nav>
      </header>
      <main className="min-h-screen bg-warm-950 text-warm-100 font-['Noto_Sans_KR'] relative overflow-hidden">
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
              <button className="glass-card px-4 py-2 rounded-full text-sm text-warm-300 flex items-center gap-2 hover:shadow-glow-blue">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5l-3.3 3.3L18 10l3.3-3.3c.7-.7.7-1.7 0-2.4l-1.6-1.6c-.7-.7-1.7-.7-2.4 0zM11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/></svg>
                프로필 편집
              </button>
              <button className="btn-premium bg-gradient-to-r from-accent-blue to-accent-purple text-white px-6 py-3 rounded-xl font-semibold shadow-glow-blue">
                새 프로젝트 추가
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="glass-card p-6 text-center shadow-premium-sm">
              <div className="gradient-text text-4xl font-bold mb-1">{mockStats.totalProjects}</div>
              <div className="text-warm-500 text-sm uppercase tracking-wider">총 프로젝트</div>
            </div>
            <div className="glass-card p-6 text-center shadow-premium-sm">
              <div className="gradient-text text-4xl font-bold mb-1">{(mockStats.totalViews / 1000).toFixed(1)}K</div>
              <div className="text-warm-500 text-sm uppercase tracking-wider">총 조회수</div>
            </div>
            <div className="glass-card p-6 text-center shadow-premium-sm">
              <div className="gradient-text text-4xl font-bold mb-1">{mockStats.satisfaction}%</div>
              <div className="text-warm-500 text-sm uppercase tracking-wider">만족도</div>
            </div>
            <div className="glass-card p-6 text-center shadow-premium-sm">
              <div className="gradient-text text-4xl font-bold mb-1">{mockStats.averageRating}</div>
              <div className="text-warm-500 text-sm uppercase tracking-wider">평균 평점</div>
            </div>
          </div>

          {/* Recent Projects */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-50 tracking-tight mb-8">최근 프로젝트</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockProjects.slice(0, 3).map((project) => (
                <div key={project.id} className="glass-card p-6 hover:shadow-glow-blue transition-all duration-300 group">
                  <img src={project.imageUrl} alt={project.title} className="rounded-lg mb-4 w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-warm-100 mb-2">{project.title}</h3>
                  <p className="text-warm-400 leading-relaxed text-sm mb-4">{project.description}</p>
                  <div className="flex justify-between items-center text-warm-500 text-sm">
                    <span>조회수: {project.views}</span>
                    <button className="text-accent-blue hover:text-accent-cyan flex items-center gap-1">
                      자세히 보기
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Performance Overview */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-warm-50 tracking-tight mb-8">성과 분석</h2>
            <div className="glass-card p-8 shadow-premium-md">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold text-warm-100 mb-4">월별 조회수 추이</h3>
                  <img src="https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwY2hhcnR8ZW58MHwwfHx8MTc3NzEzMjIzNnww&ixlib=rb-4.1.0&q=80&w=1080" alt="월별 조회수 차트" className="w-full h-auto rounded-lg object-cover" />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold text-warm-100 mb-4">가장 많이 본 프로젝트</h3>
                  <ul className="space-y-4">
                    {[
                      { name: '기업 웹사이트 리디자인', views: '1,230' },
                      { name: '반려동물 케어 앱', views: '987' },
                      { name: '카페 브랜딩 패키지', views: '765' },
                      { name: 'VR 체험 인터페이스', views: '612' },
                    ].map((item, index) => (
                      <li key={index} className="flex justify-between items-center glass p-4 rounded-lg">
                        <span className="text-warm-200">{item.name}</span>
                        <span className="text-accent-emerald font-semibold">{item.views} 조회</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Actions / Notifications */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-warm-50 tracking-tight mb-8">빠른 실행</h2>
              <div className="space-y-4">
                <button className="btn-premium w-full text-left bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 text-warm-100 px-6 py-4 rounded-xl font-semibold flex items-center justify-between hover:shadow-glow-blue">
                  <span>프로젝트 현황 업데이트</span>
                  <svg className="w-5 h-5 text-accent-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                </button>
                <button className="btn-premium w-full text-left bg-gradient-to-r from-accent-emerald/20 to-accent-cyan/20 text-warm-100 px-6 py-4 rounded-xl font-semibold flex items-center justify-between hover:shadow-glow-emerald">
                  <span>새로운 피드백 확인</span>
                  <svg className="w-5 h-5 text-accent-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                </button>
                <button className="btn-premium w-full text-left bg-gradient-to-r from-accent-rose/20 to-accent-amber/20 text-warm-100 px-6 py-4 rounded-xl font-semibold flex items-center justify-between hover:shadow-glow-rose">
                  <span>포트폴리오 공유</span>
                  <svg className="w-5 h-5 text-accent-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"/></svg>
                </button>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-warm-50 tracking-tight mb-8">알림</h2>
              <div className="glass-card p-6 space-y-4 shadow-premium-md">
                {mockNotifications.map((notification) => (
                  <div key={notification.id} className="flex items-start gap-3">
                    <img src={notification.user.avatarUrl} alt={`${notification.user.name} 아바타`} className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <p className="text-warm-200">
                        {notification.user.name !== '시스템' && <span className="font-semibold">{notification.user.name}</span>}
                        {notification.action}
                      </p>
                      <span className="text-warm-500 text-xs">{notification.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="border-t border-warm-800/50 py-16 px-6 bg-warm-950">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <span className="gradient-text font-bold text-lg">Site</span>
            <p className="text-warm-500 text-sm leading-relaxed mt-3 max-w-sm">Building the future, one pixel at a time.</p>
          </div>
          <div>
            <h4 className="font-semibold text-warm-300 mb-4">Pages</h4>
            <ul className="space-y-2 text-sm text-warm-500">
              <li><Link to="/" className="hover:text-accent-blue transition-colors">Home</Link></li>
              <li><Link to="/dashboard" className="hover:text-accent-blue transition-colors">Dashboard</Link></li>
              <li><Link to="/settings" className="hover:text-accent-blue transition-colors">Settings</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-warm-300 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-warm-500">
              <li><a href="#" className="hover:text-accent-blue transition-colors">About</a></li>
              <li><a href="#" className="hover:text-accent-blue transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent-blue transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-warm-800/50 text-center text-warm-600 text-sm">
          © 2026 Site. All rights reserved.
        </div>
      </footer>
    </div>
  );
}