# Session 3 - Notes

## Problem Overview

- **Problem Name:** Maximum Average Subarray I
- **Difficulty:** Easy
- **Topics:** Arrays, sliding window

---

## Key Concepts Discussed

### 1. Problem Understanding

- We need a contiguous subarray, so the selected elements must be next to one another.
- Every valid subarray must contain exactly `k` elements.
- Because every window has the same length, the window with the maximum sum also has the maximum average.
- The array may contain negative values, so the maximum sum should begin as the sum of the first valid window.

### 2. Approach & Strategy

1. Calculate the sum of the first `k` elements.
2. Store that sum as both the current window sum and the maximum sum.
3. Move the window one position at a time.
4. Subtract the element leaving the window and add the element entering it.
5. Update the maximum sum after each move.
6. Divide the maximum sum by `k` to get the maximum average.

- **Time Complexity:** O(n), where `n` is the length of `nums`
- **Space Complexity:** O(1)

### 3. Brute-Force Alternative

1. Start a window at every valid index.
2. Add all `k` elements inside each window.
3. Track the largest sum and divide it by `k`.

- **Time Complexity:** O(n × k), because every window sum is calculated from scratch
- **Space Complexity:** O(1)

---

## Solution Walkthrough

For `nums = [1, 12, -5, -6, 50, 3]` and `k = 4`:

- First window: `[1, 12, -5, -6]`, sum = `2`
- Slide right: subtract `1`, add `50`, sum = `51`
- Slide right: subtract `12`, add `3`, sum = `42`
- The maximum sum is `51`, so the maximum average is `51 / 4 = 12.75`

---

## Learnings & Takeaways

- A fixed-size sliding window avoids repeated work on overlapping subarrays.
- Update a window by removing the outgoing value and adding the incoming value.
- When all candidates have equal length, comparing their sums is enough to compare their averages.
- Initializing from the first real window handles arrays containing only negative numbers.

---

## Resources

- [Maximum Average Subarray I on LeetCode](https://leetcode.com/problems/maximum-average-subarray-i/description/)
- Related problems: Minimum Size Subarray Sum, Maximum Sum of Distinct Subarrays With Length K

---

## Discussion Points

- Why is it safe to compare window sums instead of window averages?
- What would change if the subarray length could vary?
- Why should `maximumSum` not be initialized to `0`?
