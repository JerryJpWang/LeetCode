class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const reverseLinked = function (head) {
    let current = head;    
    let prev = null;
    while(current){
        
        let next = current.next;
        current.next = prev;
        prev = current;        
        current = next;
    }

    return prev;
};

let re = reverseLinked(head);
console.log(re);
