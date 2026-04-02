/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let currA = headA;
    let currB = headB;
    let nodesA = new Map()
    while (currA){
        nodesA.set(currA, currA.val);
        currA = currA.next;
    }
    while(currB){
        if (nodesA.has(currB)) return currB
        else currB = currB.next
    }
    return null;
};