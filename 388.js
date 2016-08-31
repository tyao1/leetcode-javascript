// https://leetcode.com/problems/longest-absolute-file-path/

/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    var lexi = '';
    var newLine = 0;
    var longest = 0;
    var currentNode = fileTree = {length: 0, depth: 0, children: []};
    var leavesMap = {0: currentNode};
    var adder = 0;
    var isFile = false;
    var forceUpdate = false;
    var opOn = 0;
    var isNOn = false;
    for (var i=0; i<input.length; i++) {
        var char = input[i];
        if (char ==='\t') {
            newLine++;
            isNOn = false;
            continue;
        }
        if (char ==='\n') {
            isNOn = true

            currentNode.length += adder;
            adder = 0;

            if (isFile) {
              if (currentNode.length > longest) {
                longest = currentNode.length;
              }
              isFile = false;
            }
            continue;
        }
        if (isNOn && char !== '\t') { // no \t happened
             currentNode.length = 0;
             adder = 0;
             isNOn = false;
            forceUpdate = true;
        }
        if (newLine || forceUpdate) {
            isNOn = false;
            if (!forceUpdate && newLine - currentNode.depth !== 1) {
                // another path
                currentNode = leavesMap[newLine - 1];
            } else {
                leavesMap[newLine-1] = currentNode;
            }

            var node = {
                length: currentNode.length + (newLine ? 1 : 0), // the /
                depth: newLine,
                children: [],
            }
            currentNode.children.push(node);
            currentNode = node;
            newLine = 0;
            forceUpdate = false;
        }
        if (char === '.') {
            isFile = true
        }
        adder++;
    }
    if (isFile) {
        currentNode.length += adder;
        if (currentNode.length > longest) {
            longest = currentNode.length;
          }
    }
    return longest;
};
