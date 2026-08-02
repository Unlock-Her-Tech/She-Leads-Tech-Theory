function longestPalindrome(s: string): number {
	// Here I am using a dictionary size of 128 to store the count of
	// the letters, instead of using a hashmap, since every letter is
	// encoded in a unique number, and both uppercase and lowercase
	// English letters are encoded in that range:
	// A - 65
	// Z - 90
	// a - 97
	// z - 122
	// theoritically we can use an array of 52 to store them, but
	// 128 doesn't cost much more space in RAM.
	const R = 128;
	const map: number[] = new Array(R).fill(0);

	for (let i = 0; i < s.length; i++) {
		const c = s.charCodeAt(i);
		map[c]++;
	}

	let ans = 0;
	let has_odd = false;

	for (let i = 0; i < map.length; i++) {
		let x = map[i];

		if (x & 1) {
			// if this letter occurs odd times, we can only use
			// the largest even number
			ans += x - 1;
			has_odd = true;
		} else {
			// if this letter occurs even times, we can use all
			// of this letter
			ans += x;
		}
	}

	// if there is any letter occurs in odd times, we can use only
	// 1 to form the final string.
	return has_odd ? (ans + 1) : ans;
};
