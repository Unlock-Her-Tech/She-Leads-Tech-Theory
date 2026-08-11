# Session 2 - Notes

## Problem Overview

- **Problem Name:** Longest Palindromic Substring
- **Difficulty:** Medium
- **Topics:** String manipulation, two-pointer technique, dynamic programming

---

## Key Concepts Discussed

### 1. Problem Understanding

- Find the longest substring that reads the same forwards and backwards
- Must return the actual substring, not just its length
- Handle both odd-length palindromes (e.g., "bab") and even-length palindromes (e.g., "bb")
- Edge case: Single character is always a palindrome

### 2. Approach & Strategy

- **Approach 1: Expand Around Center**
  - Check each possible center point and expand outward
  - Time Complexity: O(n²)
  - Space Complexity: O(1)
- **Approach 2: Dynamic Programming**
  - Build a table to store which substrings are palindromes
  - Time Complexity: O(n²)
  - Space Complexity: O(n²)

### 3. Solution Walkthrough

- For expand around center: iterate through each index, treat it as a potential palindrome center
- Consider both odd-length (single center) and even-length (double center) cases
- Track the longest palindrome found and return it

---

## Code Snippets

### Solution

```typescript
// Code here
```

---

## Learnings & Takeaways

- Expanding around center is more space-efficient than DP approach
- Always consider both odd and even length palindromes
- String slicing and index tracking are crucial for this problem

---

## Resources

- [Longest Palindromic Substring on LeetCode](https://leetcode.com/problems/longest-palindromic-substring/description/)
- Related problems: Palindrome Number, Valid Palindrome

---

## Discussion Points

- When would DP be preferred over expand around center?
- How would you optimize if you needed to find multiple palindromic
