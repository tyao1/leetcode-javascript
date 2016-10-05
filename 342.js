/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    return num > 0 && !!((num & num - 1) === 0 && num.toString(2).length % 2);
};
