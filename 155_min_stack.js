var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.stack.length === 0)  this.stack.push([val, val]) 
    else {
        // find the min between the element which is being pushed and last min from top
        // at every index we would have another array with value and MinValue till that 
        // top element ke array ke 1 index par actual minimum saved hai 
        currentMin = this.stack[this.stack.length - 1][1]
        let min = Math.min(val, currentMin)
        this.stack.push([val, min])
    }
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
     this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length  - 1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */