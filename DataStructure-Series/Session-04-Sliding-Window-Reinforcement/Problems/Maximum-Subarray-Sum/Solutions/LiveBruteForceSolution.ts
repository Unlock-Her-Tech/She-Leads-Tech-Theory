export function getMaxWindowSumUsingBruteForce(oneMinuteCounts: number[], windowSize: number) {
  if (windowSize > oneMinuteCounts.length) {
    throw new Error("Not enough counts provided for that window size!");
  }

  let maxCountSoFar = 0;

  for (
    let startIndex = 0;
    startIndex + windowSize <= oneMinuteCounts.length;
    startIndex++
  ) {
    let rollingCount = 0;

    for (let i = 0; i < windowSize; i++) {
      const currentNumber = oneMinuteCounts[startIndex + i];
      rollingCount = rollingCount + currentNumber;
    }

    maxCountSoFar = Math.max(maxCountSoFar, rollingCount);
  }

  return maxCountSoFar;
}
