// https://leetcode.com/problems/unique-binary-search-trees/

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const fn = {};
    for(let k = 0; k <= n; k++) {
      fn[k] = 0;
    }
    fn[0] = 1;
    for (var i = 1; i <= n; i++) {
      for (var j = 0; j < i; j++) {
        fn[i] += fn[j] * (fn[i-1-j] || 0);
      }
    }
    return fn[n];
};
