# Longest Palindrome

## Problem Statement

Given a string `s` containing lowercase and uppercase English letters, return the length of the longest palindrome that can be built with those letters.

Letters are case-sensitive. For example, `"Aa"` is not a palindrome.

## Examples

**Example 1:**

```
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome is "dccaccd", which has length 7.
```

**Example 2:**

```
Input: s = "a"
Output: 1
```

## Constraints

- `1 <= s.length <= 2000`
- `s` consists of lowercase and/or uppercase English letters only.

## LeetCode Link

[Longest Palindrome on LeetCode](https://leetcode.com/problems/longest-palindrome/)

---

## Hints

1. How many characters with the same value can be used as matching pairs?
2. Can more than one character with an odd count be in the middle of a palindrome?
3. Would a frequency map make counting easier?
