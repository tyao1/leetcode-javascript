/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if (nums.length < 1) return false;
    var store = {};
    for (let i = 0; i<nums.length; i++) {
        var num = nums[i];
        if (store[num] === undefined) {
           store[num] = i;
        } else {
            if (i - store[num] <= k) return true;
            store[num] = i;
        }
    }
    return false;
};
