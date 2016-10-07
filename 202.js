/**
 * @param {number} n
 * @return {boolean}
 */
var happyTable = {};
var getNextNumber = function(n) {
    var value = 0;
    while (n) {
        var next = n % 10;
        value+= next * next;
        n -= next;
        n /= 10;
    }
    return value;
}
var isHappy = function(n) {
    var occurs = {};
    while(n !== 1) {
        if (occurs[n]) return false;
        occurs[n] = true;
        n = getNextNumber(n);
    }
    return true;
};
