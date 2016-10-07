/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    var strs = [];
    for (var i = 0; i<numRows; i++) strs.push([]);
    var left = len = s.length;
    // var x = 0;
    var y = 0;
    var direction = true;
    while(left) {
       strs[y].push(s[len - left]);
       left--;
       if (direction) {
           if (y < numRows - 1) {
            y++;
           } else {
              y--;
              // x++;
              direction = false;
           }
       } else {
           if (y > 0) {
               y--;
               // x++;
           } else {
               y++;
               direction = true;
           }
       }
    }
    return strs.reduce((prev, curr) => prev + curr.join(''), '');
};
