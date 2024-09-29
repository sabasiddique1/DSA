function characterReplacement(s, k) {
    let left = 0;
    let maxFreq = 0;
    let charCount = Array(26).fill(0);
    let result = 0;

    for (let right = 0; right < s.length; right++) {
        let currentChar = s[right];
        charCount[currentChar.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        maxFreq = Math.max(maxFreq, charCount[currentChar.charCodeAt(0) - 'A'.charCodeAt(0)]);

        while ((right - left + 1) - maxFreq > k) {
            charCount[s[left].charCodeAt(0) - 'A'.charCodeAt(0)]--;
            left++;
        }

        result = Math.max(result, right - left + 1);
    }

    return result;
}

console.log(characterReplacement("ABAB", 2)); // Output: 4
console.log(characterReplacement("AABABBA", 1)); // Output: 4

