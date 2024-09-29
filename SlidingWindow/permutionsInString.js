function checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    const s1Count = Array(26).fill(0); 
    const windowCount = Array(26).fill(0); 

    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 97]++;
        windowCount[s2.charCodeAt(i) - 97]++;
    }

    const matches = (arr1, arr2) => {
        for (let i = 0; i < 26; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    };

    for (let i = s1.length; i < s2.length; i++) {
        if (matches(s1Count, windowCount)) return true;

        windowCount[s2.charCodeAt(i) - 97]++; 
        windowCount[s2.charCodeAt(i - s1.length) - 97]--;
    }

    return matches(s1Count, windowCount);
}


console.log(checkInclusion("ab", "eidbaooo")); 
console.log(checkInclusion("ab", "eidboaoo")); 
