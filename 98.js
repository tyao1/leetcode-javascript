/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var help = function (root, min, max){
    if(!root)  return true;
    if(root.val <= min || root.val >= max)  return false;
    return help(root.left, min, root.val) && help(root.right, root.val, max);
}
var isValidBST = function(root) {
    return help(root, -Infinity, Infinity);
};
