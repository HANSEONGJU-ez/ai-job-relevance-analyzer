import React from 'react'

const Navbar = ({ onHome, onStart, onShowResult, hasResult }) => {
  return (
    <nav className="flex items-center justify-between max-w-5xl mx-auto px-6 py-5">
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); onHome(); }}
        className="text-xl font-bold no-underline text-text-heading"
      >
        <span className="text-primary">AI</span> Job relevance analyzer
      </a>
      <div className="flex items-center gap-5">
        {hasResult && (
          <button
            onClick={onShowResult}
            className="text-text-body hover:text-primary transition-colors text-sm"
          >
            결과 보기
          </button>
        )}
        <button
          onClick={onStart}
          className="px-5 py-2 border border-primary text-primary text-sm font-medium rounded-full hover:bg-primary hover:text-white transition-all"
        >
          분석 시작
        </button>
      </div>
    </nav>
  )
}

export default Navbar
