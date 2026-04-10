import React from 'react'

const features = [
  {
    num: "01",
    title: "직무 기반 분석",
    desc: "입력한 직무에 맞춰 기술 키워드와 경험을 평가합니다.",
  },
  {
    num: "02",
    title: "항목별 점수",
    desc: "키워드, 프로젝트, 수치 표현, 추상성 4가지 기준으로 채점합니다.",
  },
  {
    num: "03",
    title: "개선 방향 제시",
    desc: "강점과 보완점을 구체적으로 정리해 드립니다.",
  },
]

const Home = ({ onStart }) => {
  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-24">
        <div className="max-w-xl">
          <p className="text-primary font-semibold text-sm tracking-wide mb-4">AI-POWERED ANALYSIS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-heading leading-snug mb-5">
            자기소개서,<br />
            직무에 맞는지<br />
            <span className="text-primary">확인해보세요</span>
          </h2>
          <p className="text-text-body text-lg leading-relaxed mb-10">
            AI가 자기소개서를 읽고 직무 적합도를 분석합니다.<br />
            몇 초면 강점과 보완점을 확인할 수 있어요.
          </p>
          <button
            onClick={onStart}
            className="px-8 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors"
          >
            지금 분석하기 →
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="bg-sub">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((f) => (
              <div key={f.num}>
                <span className="text-3xl font-bold text-primary/30 mb-3 block">{f.num}</span>
                <h3 className="text-lg font-bold text-text-heading mb-2">{f.title}</h3>
                <p className="text-text-body text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h3 className="text-2xl font-bold text-text-heading mb-3">준비되셨나요?</h3>
        <p className="text-text-body mb-8">회원가입 없이 바로 시작할 수 있습니다.</p>
        <button
          onClick={onStart}
          className="px-8 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors"
        >
          자기소개서 입력하기 →
        </button>
      </section>
    </>
  )
}

export default Home
