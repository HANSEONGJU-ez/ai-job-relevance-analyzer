const scoreMap = {
  good: 30,
  average: 20,
  bad: 10,
}

export function calculateScore(result) {
  return (
    scoreMap[result.keywordMatch] +
    scoreMap[result.projectExperience] +
    scoreMap[result.quantification] +
    scoreMap[result.abstractness]
  )
}
