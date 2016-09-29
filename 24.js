/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head) return null;
    if (!head.next) return head;
    var returnNode = head.next;
    while(head) {
        var next = head.next;
        if (!next) return returnNode;

        var actualnext = next.next;

        if (actualnext) {
            if (actualnext.next) head.next = actualnext.next;
            else head.next = actualnext;
        } else {
            head.next = null;
        }

        next.next = head;
        head = actualnext;
    }
    return returnNode;
};
