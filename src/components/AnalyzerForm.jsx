import React from 'react'
import { useState } from 'react'
import { analyzeResume } from '../services/openai';

const AnalyzerForm = ({ setResult }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [selfIntroduction, setSelfIntroduction] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!jobTitle || !selfIntroduction) {
      alert("직무와 자기소개서를 입력하세요.");
      return;
    }

    setLoading(true);
    try {
      const res = await analyzeResume(jobTitle, selfIntroduction);
      const content = res.choices[0].message.content;
      const parsed = JSON.parse(content);
      setResult(parsed);
    } catch (err) {
      alert("분석 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-text-heading text-center mb-8">자기소개서 분석</h2>

      <div className="mb-5">
        <label className="block text-sm font-semibold text-text-heading mb-2">직무</label>
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="예: 프론트엔드 개발자"
          className="w-full px-4 py-3 bg-sub border border-border rounded-xl text-text-heading placeholder-text-body/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
        />
      </div>

      <div className="mb-8">
        <label className="block text-sm font-semibold text-text-heading mb-2">자기소개서</label>
        <textarea
          value={selfIntroduction}
          onChange={(e) => setSelfIntroduction(e.target.value)}
          placeholder="자기소개서 내용을 입력하세요..."
          rows={10}
          className="w-full px-4 py-3 bg-sub border border-border rounded-xl text-text-heading placeholder-text-body/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full py-4 bg-primary hover:bg-primary-dark text-white text-lg font-semibold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "분석 중..." : "분석하기"}
      </button>
    </div>
  )
}

export default AnalyzerForm
