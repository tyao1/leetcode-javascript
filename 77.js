// https://leetcode.com/problems/combinations/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var result = [];

  // init tracker
  var tracker = [];
  for (let i = 0; i < k; i++) {
    tracker.push(i);
  }

  while(true) {
    let arr = [];
    for (let i = 0; i < k; i++) {
      arr.push(tracker[i] + 1);
    }
    result.push(arr);
    if (tracker[0] === n - k) return result;

    // move the last digit
    for (let j = k - 1; j >= 0; j--) {
      if (tracker[j] < n - k + j) {
        tracker[j]++;
        if (j < k - 1) {
          // reset tracker
          for (let temp = j + 1; temp < k; temp++) {
            tracker[temp] = tracker[temp-1]+1;
          }
        }
        break;
      }
    }

  }
};

console.log(combine(4,3));
