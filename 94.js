/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var traverse = function(root, result) {
    if (!root) return;
    traverse(root.left, result);
    result.push(root.val);
    traverse(root.right, result);
}

var inorderTraversal = function(root) {
    var result = [];
    traverse(root, result);
    return result;
};
