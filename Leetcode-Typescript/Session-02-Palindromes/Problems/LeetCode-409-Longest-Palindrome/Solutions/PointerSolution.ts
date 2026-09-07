function longestPalindromeWithPointers(s: string): number {
  let palindromeLength = 0;
  // Store the indexes that have already been used in a matching pair.
  const pairedIndexes = new Set<number>();
  let left = 0;

  while (left < s.length) {
    // A paired character cannot be used again.
    if (pairedIndexes.has(left)) {
      left++;
      continue;
    }

    // Search to the right for a matching character.
    let right = left + 1;

    while (
      right < s.length &&
      (pairedIndexes.has(right) || s[right] !== s[left])
    ) {
      right++;
    }

    if (right < s.length) {
      // Matching characters sit on opposite sides of the palindrome.
      pairedIndexes.add(left);
      pairedIndexes.add(right);
      palindromeLength += 2;
    }

    left++;
  }

  // One unpaired character can be placed at the palindrome's centre.
  return palindromeLength < s.length ? palindromeLength + 1 : palindromeLength;
}
