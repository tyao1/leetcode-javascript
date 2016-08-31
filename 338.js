// https://leetcode.com/problems/counting-bits/

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  if (num === 0) return [0];
  const oneCounts = [0, 1];
  for(let pow = 1; ; pow++) {
    const currentValue = Math.pow(2, pow);
    if (currentValue > num) break; // Finished
    const nextValue = Math.pow(2, pow + 1);
    for (let j = currentValue; j < nextValue && j <= num; j++) {
      // oneCounts[j] = oneCounts[j - currentValue] + 1;
      oneCounts.push(oneCounts[j - currentValue]) + 1;
    }
  }
  return oneCounts;
};
