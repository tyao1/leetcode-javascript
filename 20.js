// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  for (const char of s) {
    switch(char) {
      case '(':
      case '{':
      case '[':
        stack.push(char);
        break;
      case ')':
        if ('(' !== stack.pop()) return false;
        break;
      case '}':
        if ('{' !== stack.pop()) return false;
        break;
      case ']':
        if ('[' !== stack.pop()) return false;
        break;
    }
  }
  return stack.length === 0;
};
