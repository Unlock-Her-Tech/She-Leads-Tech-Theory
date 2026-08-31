function getMaxWindowSum(oneMinuteCounts: number[], windowSize: number) {
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

const exampleOneMinuteCounts = [0, 1, 0, 3, 5, 11, 0, 0, 10, 0];

const maxFiveMinuteWindowSum = getMaxWindowSum(exampleOneMinuteCounts, 5);

const fiveMinuteWindowLimit = 20;

if (maxFiveMinuteWindowSum > 20) {
  console.log("TOO MUCH!");
} else {
  console.log("All good :)");
}
