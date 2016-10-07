/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    var ans = '';

   for (var c of num) {

       while (ans.length && ans[ans.length - 1] > c && k) {
           ans = ans.substring(0, ans.length - 1);
           k--;
       }
       if (ans.length || c !== '0') { ans += c; }
   }
   while (ans.length && k--) { ans = ans.substring(0, ans.length - 1); }

   return ans.length ? ans : '0';
};
