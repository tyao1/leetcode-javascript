// https://leetcode.com/problems/regular-expression-matching/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (!p[0]) return !s[0];
  // next char is not '*': must match current character
  if (p[1] !== '*') {
    return !!((p[0] === s[0]) || (p[0] == '.' && s[0])) && isMatch(s.substring(1), p.substring(1));
  }
  // next char is '*'
  while (p[0] === s[0] || (p[0] === '.' && s[0])) {
    if (isMatch(s, p.substring(2))) return true;
    s = s.substring(1);
  }
  return isMatch(s, p.substring(2));
};

console.log(isMatch('a', '.*..a*'));
