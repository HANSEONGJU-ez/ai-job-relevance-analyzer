export async function analyzeResume(jobTitle, selfIntroduction){
  const response = await
    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        response_format: { type: "json_object" },
        messages:[
          {
            role: "user",
            content:`
              아래 자기소개서를 ${jobTitle} 직무 기준으로 분석해주세요.

              다음 항목을 평가해주세요.
              1. 기술 키워드 포함 여부 (keywordMatch)
              2. 프로젝트 경험 서술 여부 (projectExperience)
              3. 수치 표현 여부 (quantification)
              4. 추상 표현 비율 (abstractness)

              각 항목은 "good", "average", "bad" 중 하나로 평가해주세요.

              반드시 아래 JSON 형식으로 대답해주세요:
              {
                "keywordMatch": "good" | "average" | "bad",
                "projectExperience": "good" | "average" | "bad",
                "quantification": "good" | "average" | "bad",
                "abstractness": "good" | "average" | "bad",
                "summary": "전체 요약 문장",
                "strengths": ["강점1", "강점2"],
                "improvements": ["보완점1", "보완점2"]
              }

              자기소개서 : ${selfIntroduction}
            `
          },
        ],
      }),
    });

    const data = await response.json();
    return data;
}