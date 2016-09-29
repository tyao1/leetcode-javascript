/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var quick_pow = function (a, b) {
    var ans = 1;
    a %= 1337;
    while (b > 0) {
        if ((b & 1) !=0) ans = ans * a % 1337;
        a = a * a % 1337;
        b >>= 1;
    }
    return ans;
}
var superPow = function(a, b) {
    var n = b.length;
    var ans = 1;
    for (var i = n - 1; i >= 0; i--) {
        ans = ans * quick_pow(a, b[i]) % 1337;
        a = quick_pow(a, 10);
    }
    return ans;
};
