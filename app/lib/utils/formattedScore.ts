export const formattedScore = (score: number) => {
    const result = Math.round(score * 10) / 10
    return result.toString()
}