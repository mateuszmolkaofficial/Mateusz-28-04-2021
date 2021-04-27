export const roundNumber = (numberToRound: number, decimalSpaces: number): string =>
  (Math.round(numberToRound * 100) / 100).toFixed(decimalSpaces)
