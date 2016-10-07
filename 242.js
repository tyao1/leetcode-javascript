/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    /*
    if (s.length !== t.length) return false;
    // var len = s.length;
    var temp = {};
    for (var an of s) {
        temp[an] = (temp[an] ?  temp[an] + 1 : 1);
    }
    console.log(temp);
    for (var vali of t) {
        if (temp[vali]) {
            temp[vali]--;
        } else {
            return false;
        }
    }
    return true;
    */
    return s.split('').sort().join('') === t.split('').sort().join('');
};
