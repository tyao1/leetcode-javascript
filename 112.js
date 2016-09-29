/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {

    function traverse(node, su) {
        if (!node) return false;
        su = su + node.val;

        if (!node.left && !node.right) {
            if (sum === su) return true;
            return false;
        }
        if (traverse(node.left, su) || traverse(node.right, su)) {
            return true;
        }
        return false;
    }
    return traverse(root, 0);
};
