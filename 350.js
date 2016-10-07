/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var res = [];
    var occurs = {};
    for (var ind = 0; ind < nums1.length; ind++) {
        var num = nums1[ind];
        occurs[num] ? occurs[num]++ : occurs[num] = 1;
    }
    for (var sec of nums2) {
        if (occurs[sec]) {
            res.push(sec);
            occurs[sec]--;
        }
    }
    return res;
};
