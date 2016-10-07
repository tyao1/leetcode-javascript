/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var str = '';
    while(n) {
        var mod = n % 26;
        if (mod === 0) mod = 26;
        str = String.fromCharCode(mod + 64) + str;
        n = (n - mod) / 26;
    }
    return str;
};
