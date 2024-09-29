var minWindow = function(s, t) {
    let need = {};
    let have = {};
    for (let char of t) {
        need[char] = (need[char] || 0) + 1;
    }

    let haveCount = 0;
    let needCount = Object.keys(need).length;
    let left = 0, minLen = Infinity, start = 0;

    for (let right = 0; right < s.length; right++) {
        let rightChar = s[right];
        have[rightChar] = (have[rightChar] || 0) + 1;

        if (rightChar in need && have[rightChar] === need[rightChar]) {
            haveCount++;
        }

        while (haveCount === needCount) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }
            let leftChar = s[left];
            have[leftChar]--;
            if (leftChar in need && have[leftChar] < need[leftChar]) {
                haveCount--;
            }
            left++;
        }
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen);
};

console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
console.log(minWindow("a", "a")); // Output: "a"
console.log(minWindow("a", "aa")); // Output: ""

