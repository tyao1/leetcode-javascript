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
 var isSymmetric = function(root) {
   if (!root) return true;

   function isSubSym(leftNode, rightNode) {
     if (leftNode === rightNode) return true;
     if (leftNode && !rightNode || !leftNode && rightNode) return false;
     if (leftNode.val !== rightNode.val) return false;
     return isSubSym(leftNode.left, rightNode.right) &&
       isSubSym(leftNode.right, rightNode.left);
   }
   return isSubSym(root.left, root.right);
 };
