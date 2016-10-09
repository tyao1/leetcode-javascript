/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (!nums.length) return [];
    if (nums.length === 1) return [nums[0].toString()];
    var ret = [];
    var startTag;
    var lastNum;
    for (var ind = 0; ind < nums.length; ind++) {
        var num = nums[ind];
        if (startTag === undefined) {
            lastNum = startTag = num;
            continue;
        }
        if (num - lastNum > 1) {
            if (startTag === lastNum) {
                ret.push(lastNum.toString());
            } else {
                ret.push(startTag + '->' + lastNum);
            }
            startTag = num;
        }
        lastNum = num;
    }

    if (startTag === lastNum) {
        ret.push(lastNum.toString());
    } else {
        ret.push(startTag + '->' + lastNum);
    }
    return ret;
};
