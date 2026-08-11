# Session 2 - Notes

## Problem Overview

- **Problem Name:** Longest Palindrome
- **Difficulty:** Easy
- **Topics:** Hash maps, strings, greedy

---

## Key Concepts Discussed

### 1. Problem Understanding

- We are finding the length of the longest palindrome that can be built from the letters, not a palindromic substring.
- Characters are case-sensitive, so `"A"` and `"a"` are different characters.
- Every pair of matching characters can be placed symmetrically in the palindrome.
- At most one character with an odd count can be placed in the centre.

### 2. Approach & Strategy

1. Count how many times each character appears.
2. Add the largest even amount from every character count to the answer.
3. If any count is odd, add one character for the palindrome's centre.

- **Time Complexity:** O(n), where n is the length of `s`
- **Space Complexity:** O(k), where k is the number of distinct characters

### 3. Alternative: Direct Two-Pointer Scan

1. Start `left` at the beginning of the string.
2. Move `right` to find an unused matching character after `left`.
3. Mark each matching pair as used and add two to the palindrome length.
4. If any character remains unused, it can be used in the centre.

- **Time Complexity:** O(n²), because each `left` pointer may scan the remaining string
- **Space Complexity:** O(n), to track characters that are already paired

### 4. Alternative: Pair Duplicates with a Set

1. Store a character in a set when it appears for the first time.
2. When the same character appears again, remove it from the set and add two to the answer.
3. After processing the string, any remaining character can be the centre.

- **Time Complexity:** O(n)
- **Space Complexity:** O(k), where k is the number of distinct characters

---

## Solution Walkthrough

For `"abccccdd"`, the counts are `a: 1`, `b: 1`, `c: 4`, and `d: 2`.

- Use all 4 `c` characters and both `d` characters: 6 characters total.
- Use one of `a` or `b` in the centre: 7 characters total.

---

## Learnings & Takeaways

- Palindromes use matching pairs on both sides.
- Multiple odd counts do not create multiple centres; only one odd character can be used in the middle.
- Frequency maps are useful when the order of the original string does not matter.

---

## Resources

- [Longest Palindrome on LeetCode](https://leetcode.com/problems/longest-palindrome/)
- Related problems: Valid Palindrome, Palindrome Permutation

---

## Discussion Points

- Why can a palindrome have only one centre character?
- How would the approach change if we had to return the palindrome itself?
