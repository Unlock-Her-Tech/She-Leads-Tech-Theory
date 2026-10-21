function longestPalindromeWithSet(s: string): number {
  let palindromeLength = 0;
  const unpairedCharacters = new Set<string>();

  for (const character of s) {
    // A second occurrence completes a pair for the two palindrome sides.
    if (unpairedCharacters.has(character)) {
      unpairedCharacters.delete(character);
      palindromeLength += 2;
    } else {
      // Keep the first occurrence until a duplicate is found.
      unpairedCharacters.add(character);
    }
  }

  // One remaining character may be placed in the centre.
  return unpairedCharacters.size > 0 ? palindromeLength + 1 : palindromeLength;
}
