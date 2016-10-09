/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    this.dp = [0];
    for (var i = 1; i <= nums.length; i++) {
        this.dp[i] = this.dp[i-1] + nums[i - 1];
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.dp[j + 1] - this.dp[i];
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
