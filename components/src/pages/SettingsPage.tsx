import { useUserProfile } from '@/hooks/useUserProfile';

export default function SettingsPage() {
  const { user, portfolio, isLoading, error } = useUserProfile();

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen">Error: {error.message}</div>;
  }
  
  if (!user || !portfolio) {
    return <div className="flex justify-center items-center min-h-screen">No data found.</div>;
  }

  return (
    <div className="min-h-screen bg-warm-950 text-warm-100 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="hero-orb bg-accent-blue w-96 h-96 -top-20 -left-20" />
      <div className="hero-orb bg-accent-purple w-72 h-72 top-1/3 right-10" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 grid-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="gradient-text text-4xl md:text-6xl font-bold tracking-tight mb-4">
            계정 설정
          </h1>
          <p className="text-warm-400 text-lg max-w-2xl mx-auto">
            포트폴리오와 계정 정보를 관리하세요.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-1/4">
            <div className="glass-card p-6 sticky top-24">
              <nav className="space-y-2">
                <button type="button" className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg text-warm-100 bg-warm-800/50 hover:bg-warm-800/70 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <span>프로필</span>
                </button>
                <button type="button" className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg text-warm-300 hover:bg-warm-800/30 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                  <span>포트폴리오</span>
                </button>
                <button type="button" className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg text-warm-300 hover:bg-warm-800/30 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                  <span>테마 및 디자인</span>
                </button>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
