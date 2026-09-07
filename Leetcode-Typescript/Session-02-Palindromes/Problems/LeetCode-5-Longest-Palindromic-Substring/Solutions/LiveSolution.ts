function longestPalindrome(s: string): string {
  if (s.length <= 1) return s;

  let longest = "";

  const expand = (left: number, right: number) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > longest.length) {
        longest = s.slice(left, right + 1);
      }

      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    // odd-length palindromes
    expand(i, i);

    // even-length palindromes
    expand(i, i + 1);
  }

  return longest;
}
