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
            <h2 className="text-3xl md:text-4xl font-bold text-warm-100 mb-4">플랫폼 통계</h2>
            <p className="text-warm-400 max-w-2xl mx-auto">수많은 크리에이터들이 자신의 작품을 공유하고 있습니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="glass-card p-8">
              <div className="gradient-text text-5xl font-bold mb-2">150K+</div>
              <div className="text-warm-400">등록된 크리에이터</div>
            </div>
            <div className="glass-card p-8">
              <div className="gradient-text text-5xl font-bold mb-2">1.2M+</div>
              <div className="text-warm-400">업로드된 프로젝트</div>
            </div>
            <div className="glass-card p-8">
              <div className="gradient-text text-5xl font-bold mb-2">99%</div>
              <div className="text-warm-400">사용자 만족도</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-warm-100 mb-4">주요 기능</h2>
            <p className="text-warm-400 max-w-2xl mx-auto">당신의 작업을 돋보이게 할 강력한 기능들을 만나보세요.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">맞춤형 테마</h3>
              <p className="text-warm-400 text-sm">다양한 테마와 커스텀 옵션으로 나만의 개성을 표현하세요.</p>
            </div>
            <div className="glass-card p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">상세 분석</h3>
              <p className="text-warm-400 text-sm">방문자 통계와 인사이트를 통해 포트폴리오를 개선하세요.</p>
            </div>
            <div className="glass-card p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">손쉬운 관리</h3>
              <p className="text-warm-400 text-sm">직관적인 인터페이스로 프로젝트를 손쉽게 추가하고 관리하세요.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="gradient-text text-4xl md:text-5xl font-bold mb-6">지금 시작하세요</h2>
          <p className="text-warm-400 text-lg max-w-2xl mx-auto mb-10">
            단 몇 분만에 당신의 멋진 포트폴리오를 만들고 전 세계와 공유하세요.
          </p>
          <button className="btn-premium bg-gradient-to-r from-accent-blue to-accent-purple text-white px-8 py-4 rounded-xl font-semibold shadow-glow-blue">
            무료로 시작하기
          </button>
        </div>
      </section>
    </div>
  );
}
