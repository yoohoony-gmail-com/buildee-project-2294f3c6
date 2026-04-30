import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-warm-950 font-['Noto_Sans_KR'] text-warm-100 antialiased">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-warm-950 py-24 px-6 md:py-28">
        {/* Background orbs */}
        <div className="hero-orb bg-accent-blue w-96 h-96 -top-20 -left-20" />
        <div className="hero-orb bg-accent-purple w-72 h-72 top-1/3 right-10 animate-float" style={{ animationDelay: '2s' }} />
        <div className="hero-orb bg-accent-cyan w-80 h-80 bottom-0 left-1/4 animate-float" style={{ animationDelay: '4s' }} />
        {/* Grid texture */}
        <div className="absolute inset-0 grid-overlay" />
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-warm-300 mb-8">
            ✨ 새로운 아이디어를 현실로
          </span>
          <h1 className="gradient-text text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-pulse-glow">
            창의적인 포트폴리오로<br /> 당신의 비전을 보여주세요!
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
            <h2 className="text-3xl md:text-4xl font-bold text-warm-100 mb-4">
              모든 크리에이터를 위한 플랫폼
            </h2>
            <p className="text-warm-400 max-w-2xl mx-auto">
              우리는 당신의 작품이 빛날 수 있도록 최고의 도구와 환경을 제공합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center">
              <div className="text-accent-blue text-4xl mb-4">🚀</div>
              <h3 className="font-bold text-xl text-warm-200 mb-2">빠른 시작</h3>
              <p className="text-warm-500 text-sm">몇 분 만에 당신의 포트폴리오를 만들고 전 세계와 공유하세요.</p>
            </div>
            <div className="glass-card p-8 text-center">
              <div className="text-accent-purple text-4xl mb-4">🎨</div>
              <h3 className="font-bold text-xl text-warm-200 mb-2">자유로운 커스터마이징</h3>
              <p className="text-warm-500 text-sm">다양한 템플릿과 디자인 옵션으로 당신만의 개성을 표현하세요.</p>
            </div>
            <div className="glass-card p-8 text-center">
              <div className="text-accent-cyan text-4xl mb-4">📈</div>
              <h3 className="font-bold text-xl text-warm-200 mb-2">성장 분석</h3>
              <p className="text-warm-500 text-sm">방문자 통계와 피드백을 통해 당신의 영향력을 확인하세요.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay z-0" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-warm-100 mb-4">
              당신의 작업을 한 단계 위로
            </h2>
            <p className="text-warm-400 max-w-2xl mx-auto">
              강력한 기능들이 당신의 창의적인 여정을 지원합니다.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-accent-blue/20 flex items-center justify-center">
                  <span className="text-accent-blue">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-warm-200">고화질 이미지 및 비디오</h4>
                  <p className="text-warm-500 text-sm">원본 품질 그대로 당신의 작품을 선보이세요.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-accent-purple/20 flex items-center justify-center">
                  <span className="text-accent-purple">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-warm-200">개인 도메인 연결</h4>
                  <p className="text-warm-500 text-sm">당신의 브랜드에 맞는 주소로 포트폴리오를 운영하세요.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-accent-cyan/20 flex items-center justify-center">
                  <span className="text-accent-cyan">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-warm-200">방문자 피드백</h4>
                  <p className="text-warm-500 text-sm">작품에 대한 소중한 의견을 듣고 소통하세요.</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden glass-card p-4 shadow-glow-blue">
              <img
                src="https://images.unsplash.com/photo-1690191886622-033b7fd28648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGRlc2lnbiUyMHRlYW18ZW58MHwwfHx8MTc3NzEyNzc0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Creative portfolio design"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-950/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-bold text-xl">김민준</h3>
                <p className="text-sm text-warm-300">디자이너 & 프론트엔드 개발자</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6 bg-warm-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-warm-100">
              크리에이터들의 찬사
            </h2>
          </div>
          <div className="relative">
            <div className="glass-card p-8 md:p-12 rounded-2xl text-center shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MDYyMjh8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8MHx8fDE3NzcxMzIyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="User avatar"
                className="w-20 h-20 rounded-full mx-auto mb-6 border-2 border-accent-purple"
              />
              <blockquote className="text-lg md:text-xl text-warm-300 leading-relaxed italic mb-6">
                "이 플랫폼을 사용하고 나서 제 작업물을 보여주는 방식이 완전히 바뀌었어요. 직관적이고 아름다워서 제 포트폴리오를 자랑스럽게 공유할 수 있게 되었습니다."
              </blockquote>
              <footer className="font-semibold text-warm-200">
                이수진, <span className="text-warm-500">UX/UI 디자이너</span>
              </footer>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-warm-100 mb-4">
              영감을 주는 작품들
            </h2>
            <p className="text-warm-400 max-w-2xl mx-auto">
              플랫폼에서 활동하는 다양한 크리에이터들의 멋진 포트폴리오를 만나보세요.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl glass-card">
              <img
                src="https://picsum.photos/seed/creative-portfolio-design-interior/600/400"
                alt="Project 1"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="font-bold text-lg">혁신적인 웹 디자인</h3>
                <p className="text-sm text-warm-400">by 김민준</p>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl glass-card">
              <img
                src="https://picsum.photos/seed/creative-portfolio-design-detail/600/400"
                alt="Project 2"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="font-bold text-lg">모바일 앱 개발</h3>
                <p className="text-sm text-warm-400">by 이수진</p>
              </div>
            </div>
            {/* Project Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl glass-card">
              <img
                src="https://picsum.photos/seed/creative-portfolio-design-team/600/400"
                alt="Project 3"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="font-bold text-lg">브랜딩 및 로고 디자인</h3>
                <p className="text-sm text-warm-400">by 박서준</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 bg-warm-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-warm-100 mb-4">
              당신에게 맞는 플랜
            </h2>
            <p className="text-warm-400 max-w-2xl mx-auto">
              무료로 시작하거나, 더 많은 기능이 필요하다면 프로 플랜으로 업그레이드하세요.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="glass-card p-8 rounded-2xl border border-warm-800">
              <h3 className="text-2xl font-bold text-warm-200 mb-2">기본</h3>
              <p className="text-warm-500 mb-6">핵심 기능으로 시작하기</p>
              <div className="text-4xl font-bold text-white mb-6">
                $0 <span className="text-lg font-normal text-warm-500">/ 월</span>
              </div>
              <ul className="space-y-4 text-warm-400 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-accent-blue">✓</span> 1개 포트폴리오
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent-blue">✓</span> 10개 프로젝트
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent-blue">✓</span> 기본 템플릿
                </li>
              </ul>
              <button className="w-full glass-card py-3 rounded-lg font-semibold hover:bg-warm-800 transition-colors">
                무료로 시작하기
              </button>
            </div>
            {/* Pro Plan */}
            <div className="glass-card p-8 rounded-2xl border border-accent-purple shadow-glow-purple">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold text-warm-200">프로</h3>
                <span className="text-xs font-bold uppercase tracking-widest bg-accent-purple text-white px-3 py-1 rounded-full">인기</span>
              </div>
              <p className="text-warm-500 mb-6">모든 기능으로 당신의 가능성을 최대로</p>
              <div className="text-4xl font-bold text-white mb-6">
                $12 <span className="text-lg font-normal text-warm-500">/ 월</span>
              </div>
              <ul className="space-y-4 text-warm-400 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-accent-purple">✓</span> 무제한 포트폴리오
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent-purple">✓</span> 무제한 프로젝트
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent-purple">✓</span> 프리미엄 템플릿
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent-purple">✓</span> 개인 도메인
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent-purple">✓</span> 고급 분석 기능
                </li>
              </ul>
              <button className="w-full btn-premium bg-gradient-to-r from-accent-blue to-accent-purple text-white py-3 rounded-lg font-semibold shadow-glow-blue">
                프로 플랜 시작하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">
            지금 바로 당신의 이야기를<br /> 시작할 준비가 되셨나요?
          </h2>
          <p className="text-warm-400 text-lg max-w-2xl mx-auto mb-10">
            당신의 창의적인 여정에 함께하세요. 몇 번의 클릭만으로 멋진 포트폴리오를 만들 수 있습니다.
          </p>
          <button className="btn-premium bg-gradient-to-r from-accent-blue to-accent-purple text-white px-8 py-4 rounded-xl font-semibold shadow-glow-blue text-lg">
            포트폴리오 만들기
          </button>
        </div>
      </section>
    </div>
  );
}
