// https://leetcode.com/problems/first-unique-character-in-a-string/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var count = 0;
    var map = {};
    var indexMap = {};
    var invalideChar = {};
    for (var ind = 0; ind < s.length; ind++) {
        var char = s[ind];
        if (invalideChar[char]) {
            continue;
        }
        if (map[char] !== undefined) {
            delete indexMap[map[char]];
            invalideChar[char] = true;
        }
        else {
            map[char] = ind;
            indexMap[ind] = true;
        }
    }
    if (Object.keys(indexMap).length) return parseInt(Object.keys(indexMap)[0]);
    return -1;
};
