// A node with the structure {next: Node, value: Integer}
class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
        this.previous = null;
    }
}

// LinkedList implementation.
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null;
        this.size = 0;
    }

    // Add a new node to the end of the linked list.
    add(value) {
        var new_node = new Node(value);

        if (!this.head) {
            this.head = new_node;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new_node;
            new_node.previous = current;
        }
        this.tail = new_node;
        this.size++;
        return this;
    }

    // If the value is in the list, remove the node. If the value is not in the list, throw an error.
    remove(value) {
        var current = this.head;
        if (current.value == value) {
            this.head = current.next;
            this.size--;
            return this;
        }
        while (current.next != null) {
            if (current.next.value == value) {
                current.next = current.next.next;
                this.size--;
                return this;
            }
            current = current.next;
        }

        throw new Error("Value not found.");
    }

    // Print the linked list.
    print() {
        var current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    // 
    reverse() {
        var previous = null;
        var next = null;
        var current = this.head;
        this.tail = current;
        while (current) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
    }
}

// This exports the LinkedList as a class to be used externally.
module.exports = LinkedList;

/* EXTRA CREDIT 

  - What is the O(n) of the `add` function?
  - What is the O(n) of the `remove` function?
  - Make `add` and `remove` "chainable"
  - Make it a "Doubly-Linked List" by adding a `previous` to nodes
  - How could you change the data structure to make adding an element O(1)

*/
