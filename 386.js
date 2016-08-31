// https://leetcode.com/problems/lexicographical-numbers/

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  var numbers = [];
  function dfs(current, n, numbers) {
    if (current > n) return;
    numbers.push(current);
    if (10 * current > n) return;
    for (let j = 0; j < 10; j++) {
       dfs( 10 * current + j, n, numbers);
     }
  }

  for (let i = 1; i < 10; i++) {
      dfs(i, n, numbers);
  }
  return numbers;
};

console.log(lexicalOrder(101));
