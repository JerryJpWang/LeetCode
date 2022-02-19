/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var swapNodes = function (head, k) {
    let current = head;
    let length = 0;
    let map = {};

    while (current) {
        length++;
        map[length] = current;
        current = current.next;
    }

    const leftK = length - k + 1;
    const leftPos = Math.min(leftK, k);
    const rightPos = Math.max(leftK, k);

    let leftNode = map[leftPos];
    let rightNode = map[rightPos];

    let temp = rightNode.val;
    rightNode.val = leftNode.val;
    leftNode.val = temp;

    return head;
};

let head = new ListNode(1, null);
head.next = new ListNode(2, null);
head.next.next = new ListNode(3, null);
head.next.next.next = new ListNode(4, null);
head.next.next.next.next = new ListNode(5, null);
head.next.next.next.next.next = new ListNode(6, null);

let r = swapNodes(head, 3);
console.log(r);

/*
123 
l 456 
r 789
*/

/*
123 
l 456 
r 789
*/
