# Maximum Average Subarray I

## Problem Statement

Given an integer array `nums` containing `n` elements and an integer `k`, find a contiguous subarray of length `k` with the maximum average value and return that average.

Answers within `10^-5` of the correct value are accepted.

## Examples

**Example 1:**

```
Input: nums = [1, 12, -5, -6, 50, 3], k = 4
Output: 12.75000
Explanation: The maximum average is (12 - 5 - 6 + 50) / 4 = 12.75.
```

**Example 2:**

```
Input: nums = [5], k = 1
Output: 5.00000
```

## Constraints

- `n == nums.length`
- `1 <= k <= n <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

## LeetCode Link

[Maximum Average Subarray I on LeetCode](https://leetcode.com/problems/maximum-average-subarray-i/description/)

---

## Hints

1. Start by finding the sum of the first `k` elements.
2. When the window moves one position, which value leaves and which value enters?
3. Can you track the maximum sum without recalculating every window from scratch?
