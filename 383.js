// https://leetcode.com/problems/ransom-note/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (!ransomNote || ransomNote === magazine) return true;
    var charMap = {};
    var total = 0;
    for (let ind = 0; ind < ransomNote.length;  ind++) {
        const char = ransomNote[ind];
        if (charMap[char]) charMap[char]++
        else charMap[char] = 1;
        total++;
    }
    for (let ind = 0; ind < magazine.length;  ind++) {
        const char = magazine[ind];

        if (!charMap[char] || charMap[char] === 0) continue;
        else if (charMap[char]) {
            charMap[char]--;
            total--;
            if (total === 0) return true;
        }
    }
    return false;
};
