/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    if (s.length < k) return 0;
    var elementTable = {};
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        elementTable[char] = elementTable[char] ? elementTable[char] + 1 : 1;
    }
    var abandonChar = [];
    Object.keys(elementTable).forEach(key => {
       var count = elementTable[key];
       if (count < k) {
           abandonChar.push(key);
       }
    });

    if (!abandonChar.length) return s.length;
    var finalArrays = [];
    var currentArrays = [s];
    for (var abandoned of abandonChar) {
        var tempArray = [];
        for (var chars of currentArrays) {
            tempArray = tempArray.concat(chars.split(abandoned));
        }
        currentArrays = tempArray;
    }
    var max = 0;
    for (var i of currentArrays) {
        var possible = longestSubstring(i,k);
        if (possible > max) {
            max = possible;
            if (possible > s.length - k - 1) return max;
        }
    }
    return max;
};
