// https://leetcode.com/problems/subsets/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [];
  const foundTable = new Map();

  function addSet(set) {
    result.push(set);
    foundTable[set] = true;
  }
  function exist(array) {
    return foundTable[array];
  }
  function getSubSets(sets) {
    addSet(sets);
    if (sets.length < 1) return;
    for (let ind = 0; ind < sets.length; ind++) {
      const newNum = [...sets];
      newNum.splice(ind, 1);
      if (exist(newNum)) {
        continue;
      }
      getSubSets(newNum);
    }
  }
  getSubSets(nums);
  return result;
};

subsets([1,2,3]);
