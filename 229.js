/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    var size = nums.length;
    var occurCount = Math.floor(size / 3) + 1;
    var cm = 0; cn = 0; m = 0; n = 0;
    for (let i = 0; i < size; i++) {
        var num = nums[i];
        if (num === m) {
            cm++;
        } else if (num === n) {
            cn++;
        } else if (cm === 0) {
            cm++; m = num;
        } else if (cn === 0) {
            cn++; n = num;
        } else {
            cn--;
            cm--;
        }
    }

    cm = 0; cn = 0;

    for (let i = 0; i < size; i++) {
        var num = nums[i];
        if (num === m) {
            cm++;
        } else if (num === n) {
            cn++;
        }
    }
    var res = [];
    if (cm >= occurCount) {
        res.push(m);
    }
    if (cn >=occurCount) {
        res.push(n);
    }
    return res;

};
