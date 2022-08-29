const arr = [1, 2];
let result = arr.pop(); //pop한 요소 반환됨.
console.log(result); // 2

console.log(arr); //[1]

const Stk = (function() {
    function Stack(array = []) {
        if (!Array.isArray(array)){
            throw new TypeError(`${array} is not an array`);
        }
        this.array = array;
    }
    
    Stack.prototype = {
        constructor: Stack,

        push(value) {
            return this.array.push(value);
        },

        pop() {
            return this.array.pop();
        },

        entries() {
            return [...this.array];
        }
    };

    return Stack;
}());

const stack = new Stk([1, 2]);
console.log(stack.entries()); // [ 1, 2 ]

stack.push(3);
console.log(stack.entries()); // [ 1, 2, 3 ]

stack.pop();
console.log(stack.entries()); // [1, 2]

class Stack {
    #array; // private class number

    constructor(array = []) {
        if (!Array.isArray(array)) {
            throw new TypeError(`${array} is not an array..`);
        }
        this.#array = array;
    }

    push(value) {
        return this.#array.push(value);
    }

    pop() {
        return this.#array.pop();
    }

    entries() {
        return [...this.#array];
    }
}

const stack2 = new Stack([1, 2]);
console.log(stack2.entries()); //[ 1, 2 ]

stack2.push(3);
console.log(stack2.entries()); // [ 1, 2, 3 ]

stack2.pop();
console.log(stack2.entries()) // [ 1, 2 ]