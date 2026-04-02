/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
// find the middle of the linked list 
let slow = head;
let fast = head; 
while(fast && fast.next){
  slow = slow.next;
  fast = fast.next.next;
}

// reverse the second linked list 
let prev = null;
curr = slow;
while(curr){
 temp = curr.next;
 curr.next = prev;
 prev = curr;
 curr = temp;
}


// run and compare the val of each node in first and second linked list
let firstList = head;
let secondList = prev;
while (secondList){
    if (firstList.val != secondList.val) {
        return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
}
return true;
};