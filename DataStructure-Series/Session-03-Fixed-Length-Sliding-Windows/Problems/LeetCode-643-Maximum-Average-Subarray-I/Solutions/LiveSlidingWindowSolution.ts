function findMaxAverageSlidingWindow(nums: number[], k: number): number {
  // Calculate the sum of the first complete window.
  let windowSum = 0;

  for (let index = 0; index < k; index++) {
    windowSum += nums[index];
  }

  let maximumSum = windowSum;

  // Move the window by removing the outgoing value
  // and adding the incoming value.
  for (let right = k; right < nums.length; right++) {
    const left = right - k;

    windowSum -= nums[left];
    windowSum += nums[right];
    maximumSum = Math.max(maximumSum, windowSum);
  }

  return maximumSum / k;
}
