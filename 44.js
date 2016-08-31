// https://leetcode.com/problems/wildcard-matching/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  var n = s.length, m = p.length;
  var j = 0;
  for(var i = 0, lastp = -1, lasts = -1; i != n;){
    if ((s[i] === p[j]) || (p[j] === '?')){
      i++; j++;
    } else if (p[j] === '*'){
      j++;
      lastp = j;
      lasts = i;
    } else if (lastp != -1 ){
      j = lastp;
      i = ++lasts;
    } else
      return false;
  }
  for (; (j < m) && (p[j] === '*'); j++);
  return (j === m);
};

// console.log(isMatch("abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb",
// "**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb"));

// console.log(isMatch('c', '*?*'));
