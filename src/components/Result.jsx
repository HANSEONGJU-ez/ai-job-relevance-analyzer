import React from 'react'
import { calculateScore } from "../utils/calculateScore"

const labelMap = {
  good: { text: "우수", color: "text-success", bg: "bg-success/10" },
  average: { text: "보통", color: "text-warning", bg: "bg-warning/10" },
  bad: { text: "부족", color: "text-danger", bg: "bg-danger/10" },
}

const Result = ({ result }) => {
  const score = calculateScore(result);

  const items = [
    { label: "기술 키워드", value: result.keywordMatch },
    { label: "프로젝트 경험", value: result.projectExperience },
    { label: "수치 표현", value: result.quantification },
    { label: "추상 표현", value: result.abstractness },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-text-heading text-center mb-8">분석 결과</h2>

      {/* 총점 */}
      <div className="text-center bg-sub rounded-2xl py-10 mb-8">
        <div className="text-6xl font-bold text-primary mb-1">{score}</div>
        <p className="text-text-body text-sm">/ 120점</p>
      </div>

      {/* 항목별 점수 */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {items.map((item) => {
          const info = labelMap[item.value] || { text: item.value, color: "text-text-body", bg: "bg-sub" };
          return (
            <div key={item.label} className={`${info.bg} rounded-xl p-5 text-center border border-border`}>
              <p className="text-text-body text-sm mb-1">{item.label}</p>
              <p className={`font-bold text-lg ${info.color}`}>{info.text}</p>
            </div>
          );
        })}
      </div>

      {/* 요약 */}
      <div className="mb-6 bg-sub rounded-xl p-6">
        <h3 className="text-base font-bold text-text-heading mb-2">요약</h3>
        <p className="text-text-body text-sm leading-relaxed">{result.summary}</p>
      </div>

      {/* 강점 */}
      <div className="mb-6">
        <h3 className="text-base font-bold text-success mb-3">강점</h3>
        <ul className="space-y-2">
          {result.strengths.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-text-body text-sm bg-success/5 border border-success/20 rounded-lg px-4 py-3">
              <span className="text-success font-bold">+</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 보완점 */}
      <div>
        <h3 className="text-base font-bold text-warning mb-3">보완점</h3>
        <ul className="space-y-2">
          {result.improvements.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-text-body text-sm bg-warning/5 border border-warning/20 rounded-lg px-4 py-3">
              <span className="text-warning font-bold">!</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Result
