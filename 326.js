/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    var ans = Math.log(n)/Math.log(3);
    return Math.abs(Math.round(ans) - ans) < 0.000000000001;
};
