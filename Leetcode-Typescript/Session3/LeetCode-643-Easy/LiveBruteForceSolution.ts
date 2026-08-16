function findMaxAverageBruteForce(nums: number[], k: number): number {
  let maximumSum = -Infinity;

  // Try every possible starting position for a window of length k.
  for (let start = 0; start <= nums.length - k; start++) {
    let currentSum = 0;

    // Recalculate the entire sum for this window.
    for (let index = start; index < start + k; index++) {
      currentSum += nums[index];
    }

    maximumSum = Math.max(maximumSum, currentSum);
  }

  return maximumSum / k;
}
