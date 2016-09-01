// https://leetcode.com/problems/spiral-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix.length) return [];
  let height = matrix.length;
  let width = matrix[0].length;
  let total = height * width;
  let x = 0;
  let y = 0;
  const result = [];
  while(true) {
    // left to right
    for(let i = x; i < x + width; i++) {
      result.push(matrix[y][i]);
      total--;
      if (total === 0 ) return result;
    }
    width--;
    x = x + width;
    y++;
    height--;

    // top to bottom
    for (let i = y; i < y + height ; i++) {
      result.push(matrix[i][x]);
      total--;
      if (total === 0 ) return result;
    }

    y = y + height - 1;
    x--;

    // right to left
    for (let i = x; i > x - width; i--) {
      result.push(matrix[y][i]);
      total--;
      if (total === 0 ) return result;
    }
    width--;
    height--;
    x = x - width;
    y--;

    // bottom to top
    for (let i = y; i > y - height; i--) {
      result.push(matrix[i][x]);
      total--;
      if (total === 0 ) return result;
    }
    x++;
    y-=height - 1;
  }
};

/*
console.log(spiralOrder([
  [1,2,3],
  [4,5,6],
  [7,8,9],
]));
console.log(spiralOrder([[1,2,3,4,5,6,7,8,9,10],[11,12,13,14,15,16,17,18,19,20],[21,22,23,24,25,26,27,28,29,30],[31,32,33,34,35,36,37,38,39,40],[41,42,43,44,45,46,47,48,49,50],[51,52,53,54,55,56,57,58,59,60],[61,62,63,64,65,66,67,68,69,70],[71,72,73,74,75,76,77,78,79,80],[81,82,83,84,85,86,87,88,89,90],[91,92,93,94,95,96,97,98,99,100]]));
*/
