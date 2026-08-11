# Longest Palindromic Substring

## Problem Statement

Given a string `s`, return the longest palindromic substring in `s`.

A **palindrome** is a word, phrase, or sequence that reads the same backward as forward.

## Examples

**Example 1:**

```
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```

**Example 2:**

```
Input: s = "cbbd"
Output: "bb"
```

## Constraints

- `1 <= s.length <= 1000`
- `s` consists of only digits and English letters

## Leetcode Link

[Longest Palindromic Substring on LeetCode](https://leetcode.com/problems/longest-palindromic-substring/description/)

---

## Hints

1. Could you check every possible substring?
2. What about expanding around the center of a palindrome?
3. How would you handle both odd-length and even-length palindromes?
