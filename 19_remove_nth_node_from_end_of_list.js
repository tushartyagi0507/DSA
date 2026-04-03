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
  let dummy = new ListNode()
  dummy.next = head;
  let first = dummy;

    // start the seocnd pointer from the nth distance from the first one
  for(let i =0; i < n; i++){
    first = first.next
  }

  // move both the pointers till the first pointer reaches the end node 
  let second = dummy;
  while(first.next){
    first = first.next;
    second = second.next;
  }

  // second is your prev node to the node that needs to be deleted
  second.next = second.next.next;

  return dummy.next
};