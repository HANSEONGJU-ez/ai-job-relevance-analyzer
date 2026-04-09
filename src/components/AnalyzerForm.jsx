import React from 'react'
import { useState } from 'react'
import { analyzeResume } from '../services/openai';

const AnalyzerForm = ({ setResult }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [selfIntroduction, setSelfIntroduction] = useState("");

  const handleSubmit = async () => {
    if(!jobTitle || !selfIntroduction){
      alert("직무와 자기소개서를 입력하세요.");
      return;
    }

    const res = await analyzeResume(jobTitle, selfIntroduction);

    const content = res.choices[0].message.content;
    const parsed = JSON.parse(content);
    setResult(parsed);
  }

  return (
    <div>
      <h2>직무 입력</h2>
      <input
        type="text"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        placeholder="직무를 입력하세요."  
      />

      <h2>자기소개서 입력</h2>
      <textarea
        value={selfIntroduction}
        onChange={(e) => setSelfIntroduction(e.target.value)}
        placeholder="자기소개서를 입력하세요."
      />

      <button onClick={handleSubmit}>분석하기</button>
    </div>
  )
}

export default AnalyzerForm