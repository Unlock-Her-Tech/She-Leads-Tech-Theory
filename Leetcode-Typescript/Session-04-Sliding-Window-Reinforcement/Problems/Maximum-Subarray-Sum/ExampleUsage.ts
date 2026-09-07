// UNCOMMENT ONE OF THE FOLLOWING LINES TO TEST
// import { getMaxWindowSumUsingBruteForce as getMaxWindowSum } from "./Solutions/LiveBruteForceSolution";
// import { getMaxWindowSumOptimised as getMaxWindowSum } from "./Solutions/LiveOptimisedSolution";

const exampleOneMinuteCounts = [0, 1, 0, 3, 5, 11, 0, 0, 10, 0];

const maxFiveMinuteWindowSum = getMaxWindowSum(exampleOneMinuteCounts, 5);

const fiveMinuteWindowLimit = 20;

if (maxFiveMinuteWindowSum > fiveMinuteWindowLimit) {
  console.log(
    `Rate limit exceeded (by ${
      maxFiveMinuteWindowSum - fiveMinuteWindowLimit
    } at worst point) :(`,
  );
} else {
  console.log("Rate limit adhered to :)");
}
