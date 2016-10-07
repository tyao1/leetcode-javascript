/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(A) {
  var n = A.length;
  var i = 0;
  while (i < n) {
     if (A[i] !== (i+1) && A[i] >= 1 && A[i] <= n && A[A[i]-1] !== A[i]) {
         var t = A[i];
         A[i] = A[t-1];
         A[t-1] = t;
     }
     else i++;
  }
  for (i = 0; i < n; ++i)
      if (A[i] !== (i + 1))
          return i + 1;
  return n + 1;
};
