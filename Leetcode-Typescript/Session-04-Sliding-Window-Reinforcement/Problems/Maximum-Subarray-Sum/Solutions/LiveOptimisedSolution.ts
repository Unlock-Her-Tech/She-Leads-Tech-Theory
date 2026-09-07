export function getMaxWindowSumOptimised(oneMinuteCounts: number[], windowSize: number) {
  if (windowSize > oneMinuteCounts.length) {
    throw new Error("Not enough counts provided for that window size!");
  }

  let firstCount = 0;

  for (let i = 0; i < windowSize; i++) {
    const currentNumber = oneMinuteCounts[i];
    firstCount = firstCount + currentNumber;
  }

  let maxCountSoFar = firstCount;
  let rollingCount = firstCount;

  for (
    let startIndex = 0;
    startIndex + windowSize < oneMinuteCounts.length;
    startIndex++
  ) {
    const oldNumberToDiscard = oneMinuteCounts[startIndex];
    const newNumberToAdd = oneMinuteCounts[startIndex + windowSize];

    rollingCount = rollingCount - oldNumberToDiscard + newNumberToAdd;

    maxCountSoFar = Math.max(maxCountSoFar, rollingCount);
  }

  return maxCountSoFar;
}
