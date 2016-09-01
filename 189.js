// https://leetcode.com/problems/rotate-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(n, k) {
  const actualK = k % n.length;
  const newArray = n.slice(n.length - k).concat(n.slice(0, n.length - k));
  for (var i = 0 ;i < n.length; i++ ){
    n[i] = newArray[i];
  }
};
