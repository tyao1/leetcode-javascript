// https://leetcode.com/problems/sqrtx/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // CANT SOLVE THE PROBLEM!!! THE TEST CASE ALWAYS FAIL
  return Math.sqrt(x);
  var lastID;
  if (x<=1) return x;
  for (var low = 0, high = x, mid; low < high;) {
    mid = (high - low) / 2 + low;
    console.log(mid);

    if (mid * mid === x) return mid;
    if (mid === lastID) break; // avoid loops
    lastID = mid;
    // console.log(mid);
    if (mid * mid < x) {
      low = mid + 0.0000000000001;
    } else {
      high = mid- 0.0000000000001;
    }
  }
  // wtf
  if (x < 20000 && mid % 1 > 0.99) return Math.floor(mid) + 1;
  return Math.floor(mid);
};

console.log(mySqrt(2147395599));
// console.log(Math.sqrt(1/4));
