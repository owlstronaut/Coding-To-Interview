class Stack {
    constructor() {
        this.stack = [];
        this.size = 0;
    }

    // Add an item to the top of the stack
    push(value) {
        this.stack.push(value);
        this.size++;
    }

    // Remove an item from the top of the stack and return it. Return `null` if the stack is empty.
    pop() {
        if (this.stack.length == 0)
            return null;
            
        var value = this.stack.pop();
        this.size--;
        return value;
    }

    // Return the item on top of the stack
    peek() {
        return this.stack[this.stack.length - 1];
    }

}

module.exports = Stack;