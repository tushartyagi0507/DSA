/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
    let curr = head;
    let length = 0;

    let dummy = new ListNode(0);
    dummy.next = head;

    // calculate length
    while(curr){
        curr = curr.next;
        length++;
    }

    // position before node to delete
    let pos = length - n;
    let prev = dummy;

    for (let i = 0; i < pos; i++){
        prev = prev.next;
    }

    // delete node
    prev.next = prev.next.next;

    return dummy.next;
};