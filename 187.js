// https://leetcode.com/problems/repeated-dna-sequences/

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  if (s.length < 10) return [];
  const occur = {};
  const val = [];
  for (let ind = 0; ind <= s.length - 10; ind++){
    const reader = s.substring(ind, ind + 10);
    if (occur[reader] === 1) {
      occur[reader] = 2;
      val.push(reader);
    } else if (!occur[reader]){
      occur[reader] = 1;
    }
  }
  return val;
};
// console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
