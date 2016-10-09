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
function findMiddle(head) {
    var slow = head;
    var fast = head.next;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}
function merge(head1, head2) {
    var dummy = new ListNode(0);
    var tail = dummy;
    while (head1 !== null && head2 !== null) {
        if (head1.val < head2.val) {
            tail.next = head1;
            head1 = head1.next;
        } else {
            tail.next = head2;
            head2 = head2.next;
        }
        tail = tail.next;
    }
    if (head1 !== null) {
        tail.next = head1;
    } else {
        tail.next = head2;
    }

    return dummy.next;
}

var sortList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    var middle = findMiddle(head);
    var right = sortList(middle.next);
    middle.next = null;
    var left = sortList(head);
    return merge(left, right);
};
