import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-warm-950 text-white font-sans">
      <header className="sticky top-0 z-50 bg-warm-950/90 backdrop-blur-md border-b border-warm-800/50">
        <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="gradient-text font-bold text-lg">Site</Link>
          <div className="flex items-center gap-1">
            <Link to="/" className="text-white font-semibold border-b-2 border-accent-blue px-3 py-2 text-sm">Home</Link>
            <Link to="/dashboard" className="text-warm-400 hover:text-white transition-colors px-3 py-2 text-sm">Dashboard</Link>
            <Link to="/settings" className="text-warm-400 hover:text-white transition-colors px-3 py-2 text-sm">Settings</Link>
          </div>
        </nav>
      </header>
      <main className="min-h-screen bg-warm-950 font-['Noto_Sans_KR'] text-warm-100 antialiased">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-warm-950 py-24 px-6 md:py-28">
          {/* Background orbs */}
          <div className="hero-orb bg-accent-blue w-96 h-96 -top-20 -left-20" />
          <div className="hero-orb bg-accent-purple w-72 h-72 top-1/3 right-10 animate-float" style={{animationDelay:'2s'}} />
          <div className="hero-orb bg-accent-cyan w-80 h-80 bottom-0 left-1/4 animate-float" style={{animationDelay:'4s'}} />
          {/* Grid texture */}
          <div className="absolute inset-0 grid-overlay" />
          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-warm-300 mb-8">
              ✨ 새로운 아이디어를 현실로
            </span>
            <h1 className="gradient-text text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-pulse-glow">
              창의적인 포트폴리오로<br /> 당신의 비전을 보여주세요
            </h1>
            <p className="text-warm-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              디자인, 개발, 예술 등 다양한 분야에서 당신의 독창적인 작업을 선보일 수 있는 프리미엄 플랫폼입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-premium bg-gradient-to-r from-accent-blue to-accent-purple text-white px-8 py-4 rounded-xl font-semibold shadow-glow-blue">
                내 포트폴리오 시작하기
              </button>
              <button className="glass-card px-8 py-4 rounded-xl text-warm-200 font-semibold hover:shadow-glow-purple">
                작품 둘러보기
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-6 bg-warm-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-warm-50 tracking-tight mb-4">우리의 성과</h2>
              <p className="text-warm-400 text-lg max-w-2xl mx-auto">수많은 크리에이터들이 선택한 이유를 확인하세요.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="glass-card p-6 text-center">
                <div className="gradient-text text-4xl font-bold mb-1">100K+</div>
                <div className="text-warm-500 text-sm uppercase tracking-wider">프로젝트</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="gradient-text text-4xl font-bold mb-1">50K+</div>
                <div className="text-warm-500 text-sm uppercase tracking-wider">활성 사용자</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="gradient-text-warm text-4xl font-bold mb-1">99.9%</div>
                <div className="text-warm-500 text-sm uppercase tracking-wider">만족도</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="gradient-text-warm text-4xl font-bold mb-1">20+</div>
                <div className="text-warm-500 text-sm uppercase tracking-wider">국가</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 bg-warm-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-warm-50 tracking-tight mb-4">주요 기능</h2>
              <p className="text-warm-400 text-lg max-w-2xl mx-auto">당신의 작업을 빛나게 할 강력한 도구들을 제공합니다.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-card p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                </div>
                <h3 className="text-xl font-semibold text-warm-100 mb-2">직관적인 편집기</h3>
                <p className="text-warm-400 leading-relaxed mb-4">코딩 없이 드래그 앤 드롭으로 아름다운 포트폴리오를 만드세요.</p>
                <img src="https://images.unsplash.com/photo-1734009617600-ff7b688d4a72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGRlc2lnbiUyMGludGVyaW9yfGVufDB8MHx8fDE3NzcxMjc3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="직관적인 포트폴리오 편집기" className="w-full h-48 object-cover rounded-lg mt-4 shadow-premium-sm" />
              </div>

              <div className="glass-card p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-emerald to-accent-cyan flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                </div>
                <h3 className="text-xl font-semibold text-warm-100 mb-2">맞춤형 도메인</h3>
                <p className="text-warm-400 leading-relaxed mb-4">개인화된 도메인으로 전문성을 높이고 브랜드를 강화하세요.</p>
                <img src="https://images.unsplash.com/photo-1758613654240-e531842faea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGRlc2lnbiUyMGJyYW5kaW5nfGVufDB8MHx8fDE3NzcxMzIyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="맞춤형 도메인 설정" className="w-full h-48 object-cover rounded-lg mt-4 shadow-premium-sm" />
              </div>

              <div className="glass-card p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-rose to-accent-amber flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <h3 className="text-xl font-semibold text-warm-100 mb-2">반응형 디자인</h3>
                <p className="text-warm-400 leading-relaxed mb-4">어떤 기기에서도 완벽하게 보이는 포트폴리오를 제공합니다.</p>
                <img src="https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGRlc2lnbiUyMHJlc3BvbnNpdmV8ZW58MHwwfHx8MTc3NzEzMjIyMHww&ixlib=rb-4.1.0&q=80&w=1080" alt="반응형 웹 디자인" className="w-full h-48 object-cover rounded-lg mt-4 shadow-premium-sm" />
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Showcase Section */}
        <section className="py-24 px-6 bg-warm-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-warm-50 tracking-tight mb-4">최신 포트폴리오</h2>
              <p className="text-warm-400 text-lg max-w-2xl mx-auto">영감을 줄 수 있는 다른 크리에이터들의 작품을 살펴보세요.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-card group relative overflow-hidden rounded-xl p-0 hover:shadow-glow-cyan">
                <img src="https://picsum.photos/seed/creative-portfolio-design-branding-identity/800/600" alt="브랜딩 디자인 프로젝트" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-warm-100 mb-2">브랜딩 디자인</h3>
                  <p className="text-warm-400 text-sm">기업 아이덴티티 구축 프로젝트</p>
                </div>
              </div>
              <div className="glass-card group relative overflow-hidden rounded-xl p-0 hover:shadow-glow-blue">
                <img src="https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGRlc2lnbiUyMHdlYiUyMGRldmVsb3BtZW50fGVufDB8MHx8fDE3NzcxMzIyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="웹 개발 프로젝트" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-warm-100 mb-2">반응형 웹사이트</h3>
                  <p className="text-warm-400 text-sm">사용자 경험 중심의 웹 개발</p>
                </div>
              </div>
              <div className="glass-card group relative overflow-hidden rounded-xl p-0 hover:shadow-glow-purple">
                <img src="https://images.unsplash.com/photo-1551533771-aaf659cf45b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGRlc2lnbiUyMGlsbHVzdHJhdGlvbiUyMGFydHxlbnwwfDB8fHwxNzc3MTMyMjIwfDA&ixlib=rb-4.1.0&q=80&w=1080" alt="일러스트레이션 작품" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-warm-100 mb-2">디지털 아트</h3>
                  <p className="text-warm-400 text-sm">환상적인 컨셉 아트 시리즈</p>
                </div>
              </div>
              <div className="glass-card group relative overflow-hidden rounded-xl p-0 hover:shadow-glow-emerald md:col-span-2">
                <img src="https://images.unsplash.com/photo-1767449280971-46e438b1ce4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGRlc2lnbiUyMG1vYmlsZSUyMHVpJTIwdXh8ZW58MHwwfHx8MTc3NzEzMjIyMHww&ixlib=rb-4.1.0&q=80&w=1080" alt="모바일 앱 UI/UX" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-warm-100 mb-2">모바일 앱 UI/UX</h3>
                  <p className="text-warm-400 text-sm">사용자 친화적인 인터페이스 디자인</p>
                </div>
              </div>
              <div className="glass-card group relative overflow-hidden rounded-xl p-0 hover:shadow-glow-rose">
                <img src="https://images.unsplash.com/photo-1769605767707-80909ec160cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGRlc2lnbiUyMHBob3RvZ3JhcGh5fGVufDB8MHx8fDE3NzcxMzIyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="사진 작품" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-warm-100 mb-2">풍경 사진</h3>
                  <p className="text-warm-400 text-sm">자연의 아름다움을 담다</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-6 bg-warm-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-warm-50 tracking-tight mb-4">고객 후기</h2>
              <p className="text-warm-400 text-lg max-w-2xl mx-auto">저희 플랫폼을 통해 성공을 거둔 사용자들의 이야기를 들어보세요.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img src="https://images.unsplash.com/photo-1645658043538-fc2bb1702cfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGRlc2lnbiUyMHRlYW0lMjBtZW1iZXIlMjAxfGVufDB8MHx8fDE3NzcxMzIyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="김지수 프로필" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-warm-100">김지수</div>
                    <div className="text-warm-500 text-sm">UX 디자이너</div>
                  </div>
                </div>
                <p className="text-warm-300 leading-relaxed italic">"이 플랫폼 덕분에 제 포트폴리오를 전 세계에 쉽게 선보일 수 있었습니다. 직관적인 인터페이스와 아름다운 템플릿 덕분에 제 작품이 더욱 돋보여요!"</p>
              </div>
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img src="https://images.unsplash.com/photo-1635873810723-faf3d8505491?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGRlc2lnbiUyMHRlYW0lMjBtZW1iZXIlMjAyfGVufDB8MHx8fDE3NzcxMzIyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="이준호 프로필" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-warm-100">이준호</div>
                    <div className="text-warm-500 text-sm">프론트엔드 개발자</div>
                  </div>
                </div>
                <p className="text-warm-300 leading-relaxed italic">"제 개발 프로젝트들을 멋지게 정리하고 공유할 수 있는 최고의 도구입니다. 방문자 분석 기능도 있어서 어떤 프로젝트가 인기가 많은지 쉽게 알 수 있어요."</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-warm-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-warm-50 tracking-tight mb-4">당신의 창의력을 펼치세요</h2>
            <p className="text-warm-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              지금 바로 시작하여 당신의 독창적인 작품을 세상에 알리고, 새로운 기회를 발견하세요.
            </p>
            <button className="btn-premium bg-gradient-to-r from-accent-blue to-accent-purple text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-glow-blue hover:shadow-glow-purple transition-shadow">
              무료로 시작하기
            </button>
          </div>
        </section>
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