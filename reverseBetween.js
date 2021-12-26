class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let head = new Node(1);
head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);
// head.next.next.next.next.next.next = new Node(7);

const reverseBetween = function (head, left, right) {

    let current = head;
    let pos = 1;

    let startNode = null; // left - 1;
    let tailNode = null; // left;
    let listSoFar = null;

    while (current) {
        if (pos === left - 1) {
            startNode = current;
            current = current.next;
        } else if (pos >= left && pos <= right) {
            let next = current.next;
            current.next = listSoFar;
            listSoFar = current;            
            if (pos === left) {
                tailNode = current;
            }
            current = next;
            
        } else if (pos === right + 1) {
            break;
        } else {
            current = current.next;
        }

        pos++;
    }

    tailNode.next = current;

    if(left-1===0)
    {
        return listSoFar;
    }

    startNode.next = listSoFar;
    return head;
};


/* 
    12345  => 67 
    54321 67 
*/
let re = reverseBetween(head, 3, 5);
console.log(re);
