/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    var ans = 0;
    for(var i = 1; i * i <= n; i++) {
        ans++;
    }
    return ans;
};
