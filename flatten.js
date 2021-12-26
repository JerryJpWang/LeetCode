const explore = function (head, parent) {
    let current = head;
    let uncle = null;
    
    if(parent){
        uncle = parent.next;
        parent.next = head;
        parent.child = null;
        head.prev = parent;
    }
    
    while (current) {
        let child = current.child;
        if (child) {
            let cTail = explore(child, current);
            current = cTail;
        } else {
            let next = current.next;
            if (next) {
                current = next;
            } else {
                let myTail = current;
                if (uncle) {
                    uncle.prev = myTail;
                    myTail.next = uncle;
                }
                
                return myTail;
            }
        }
    }
};

var flatten = function (head) {
    explore(head, null);
    return head;
};
