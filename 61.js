/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // first travers the linked list
    var listCache = [];
    if (!head) return null;
    while(head) {
        listCache.push(head);
        head = head.next;
    }
    var len = listCache.length;
    if (len === 0) return null;
    var ops = k % len;
    if (ops === 0) return listCache[0];
    var startNode = listCache[len - ops - 1];
    if (startNode) startNode.next = null;
    var endNode = listCache[len - 1];
    endNode.next = listCache[0];
    return listCache[len - ops];
};
