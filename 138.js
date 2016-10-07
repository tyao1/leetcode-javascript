/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var listMap;

var helper = function(head, next) {
    var dummy = new RandomListNode(0);
    var node = dummy;
    var h = head;
    while(head != null) {
        var copy = new RandomListNode(head.label);
        listMap.set(head, copy);
        node.next = copy;
        // node.next.random = head.random;
        node = node.next;
        head = head.next;
    }
    var first = dummy.next;
    while(first) {
        if (h.random) {
            first.random = listMap.get(h.random);
        }
        first = first.next;
        h = h.next;
    }
    return dummy.next;
 }
var copyRandomList = function(head) {
    listMap = new Map();
    return helper(head);
};
