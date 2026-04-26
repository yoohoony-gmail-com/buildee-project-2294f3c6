import { useState } from 'react';

function App() {
  const [likes, setLikes] = useState(0);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4 font-sans">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Site</h1>
        <p className="text-lg md:text-xl text-gray-400 mt-2">개인 포트폴리오 홈페이지</p>
      </header>
      
      <main className="mt-8 p-6 bg-gray-800 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          안녕하세요! 저는 열정적인 풀스택 개발자입니다.
          React, TypeScript, Tailwind CSS를 사용하여 멋진 웹 애플리케이션을 만드는 것을 즐깁니다.
        </p>
        <div className="mt-6 flex items-center justify-center space-x-4">
          <button 
            onClick={() => setLikes(prev => prev + 1)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label="추천하기"
          >
            추천하기 👍
          </button>
          <p className="text-lg font-medium">
            추천 수: <span data-testid="likes-count" className="font-mono bg-gray-700 px-2 py-1 rounded">{likes}</span>
          </p>
        </div>
      </main>

      <footer className="mt-8 text-gray-500 text-sm">
        <p>&copy; 2024 Site. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;