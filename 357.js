/**
 * @param {number} n
 * @return {number}
 */

var map = {'0': 1, '1' : 10};
var countNumbersWithUniqueDigits = function(n) {
    if (map[n]) return map[n];
    var num = 9;
    for (var i = 0; i < n - 1;i++) {
        num *= (9 - i);
    }
    var val = num + map[n-1];
    map[n] = val;
    return val;
};
