var MyQueue = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const stackTmp = [];

    while(this.stack.length){
        const item = this.stack.pop();
        stackTmp.push(item);
    }

    let p = stackTmp.pop();

    while(stackTmp.length){
        const item = stackTmp.pop();
        this.stack.push(item);
    }

    return p;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {

    const stackTmp = [];

    while(this.stack.length){
        const item = this.stack.pop();
        stackTmp.push(item);
    }

    let pe = stackTmp[stackTmp.length-1];

    while(stackTmp.length){
        const item = stackTmp.pop();
        this.stack.push(item);
    }

    return pe;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length < 1
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */