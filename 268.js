/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var total = (nums.length + 1) * nums.length / 2;
    for (var num of nums) {
        total -= num;
    }
    return total;
};
