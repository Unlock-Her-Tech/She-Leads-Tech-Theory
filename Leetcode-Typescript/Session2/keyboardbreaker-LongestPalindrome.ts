function longestPalindrome(s: string): number {
    let charMap = new Map<string, number>();
    let count = 0;

    for(let char of s) { //charMap.get(char) -> return value
        charMap.set(char, (charMap.get(char) || 0) + 1);

        if(charMap.get(char) % 2 === 0) {
            count += 2;
        }
    }
    if(count < s.length) {
        return count + 1;
    } else {
        return count;
    }
};