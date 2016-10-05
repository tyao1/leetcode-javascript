/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 var isSubsequence = function(s, t) {
    var index = 0;
    outer: for(let i = 0;i<s.length; i++) {
        while(t[index]) {
            if (t[index] === s[i]) {
                index++;
                continue outer;
            } else {
                index++;
            }
        }
        return false;
    }
    return true;
};
