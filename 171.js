/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var value = 0;
    var len = s.length;
    for (var i = 0; i < len; i++ ) {
        var num = s[i].charCodeAt();
        var code = num - 64;
        value = value + code * Math.pow(26, len - i -1);
    }
    return value;
};
