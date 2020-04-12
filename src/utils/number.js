export const roundTo = (num, mult = 1, roundBy = 25) =>
  Math.floor((num * mult) / roundBy) * roundBy
