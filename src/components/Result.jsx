import React from 'react'
import { calculateScore } from "../utils/calculateScore"

const Result = ({ result }) => {
  const score = calculateScore(result);

  return (
    <div>
      <h2>분석 결과</h2>
      
      <h3>총점: {score}점</h3>
      <p>요약 : {result.summary}</p>
      <div>
        <h4>강점</h4>
        <ul>
          {result.strengths.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>보완점</h4>
        <ul>
          {result.improvements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Result