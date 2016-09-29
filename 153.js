
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 1) return nums[0];
    var left = 0;
    var right = nums.length - 1;
    if (nums[left] < nums[right]) return nums[left];
    while(left < right - 1) {
        var middle = left + Math.floor((right-left) / 2);
        if (nums[middle] < nums[right]) {
            right = middle;
        } else {
            left = middle;
        }
    }
    return Math.min(nums[left], nums[right]);
};
