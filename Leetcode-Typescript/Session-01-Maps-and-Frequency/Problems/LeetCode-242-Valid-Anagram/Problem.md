# Valid Anagram Leetcode

## Problem Statement

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An **anagram** is a word or phrase formed by rearranging the letters of another, typically using all the original letters exactly once.

## Examples

**Example 1:**

```
Input: s = "anagram", t = "nagaram"
Output: true
```

**Example 2:**

```
Input: s = "rat", t = "car"
Output: false
```

## Constraints

- `1 <= s.length, t.length <= 5 * 10^4`
- `s` and `t` consist of lowercase English letters

## Leetcode Link

[Valid Anagram on LeetCode](https://leetcode.com/problems/valid-anagram/)

---

## Hints

1. What if you sorted both strings?
2. Could you use a frequency map to count characters?
3. Think about edge cases - what if the strings have different lengths?
