/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var charMap = {};
    var mapped = {};
    for (var ind = 0; ind < s.length; ind++) {
        var left = s[ind];
        var right = t[ind];
        if (charMap[left]) {
            if (right !== charMap[left]) return false;
        } else {
            if (mapped[right]) return false;
            charMap[left] = right;
            mapped[right] = true;
        }
    }
    return true;
};
