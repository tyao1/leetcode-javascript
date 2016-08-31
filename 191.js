// https://leetcode.com/problems/number-of-1-bits/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  var count = 0;
  do {
    var module = n % 2;
    if (module) count++;
    n = n - module;
  } while(n = n / 2)
  return count;
};
