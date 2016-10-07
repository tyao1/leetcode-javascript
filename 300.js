/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (!nums.length) return 0;
    var len = nums.length;
    var temp = [nums[0]];
    outer: for (var i = 1; i < len; i++) {
        var num = nums[i];
        if (num > temp[temp.length - 1]) {
            // bigger than current value, append
            temp.push(num);
        } else {
            // smaller than current value, find the right pos to swap
            for (var j = 0; j <temp.length; j++) {
                var tmp = temp[j];
                if (tmp > num) {
                    if (temp[j - 1] === num) {
                        continue outer; // if the value already exists, skip
                    }
                    temp[j] = num;
                    continue outer;
                }
            }
        }
    }
    return temp.length;
};
