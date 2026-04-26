import { Link } from 'react-router-dom';

export default function DashboardPage() {
  return (
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
            <div className="gradient-text text-4xl font-bold mb-1">12</div>
            <div className="text-warm-500 text-sm uppercase tracking-wider">총 프로젝트</div>
          </div>
          <div className="glass-card p-6 text-center shadow-premium-sm">
            <div className="gradient-text text-4xl font-bold mb-1">34.5k</div>
            <div className="text-warm-500 text-sm uppercase tracking-wider">총 방문수</div>
          </div>
          <div className="glass-card p-6 text-center shadow-premium-sm">
            <div className="gradient-text text-4xl font-bold mb-1">87%</div>
            <div className="text-warm-500 text-sm uppercase tracking-wider">프로필 완성도</div>
          </div>
          <div className="glass-card p-6 text-center shadow-premium-sm">
            <div className="gradient-text text-4xl font-bold mb-1">2</div>
            <div className="text-warm-500 text-sm uppercase tracking-wider">새 메시지</div>
          </div>
        </div>
      </div>
    </main>
  );
}
