const arr = [1, 2];

let result = arr.shift();
console.log(result); // 1

console.log(arr); // [ 2 ]

const q = (function() {
    function Queue(array = []) {
        if (!Array.isArray(array)){
            throw new TypeError(`${array} is not array...`);
        }
        this.array = array;
    }

    Queue.prototype = {
        constructor: Queue,

        enqueue(value) {
            return this.array.push(value);
        },

        dequeue() {
            return this.array.shift();
        },

        entries() {
            return [...this.array];
        }
    };

    return Queue;
}());

const que = new q([1, 2]);
console.log(que.entries()); // [ 1, 2 ]

que.enqueue(3);
console.log(que.entries()); // [ 1, 2, 3 ]

que.dequeue();
console.log(que.entries()); // [ 2, 3 ]

class Queue {
    #array;

    constructor(array = []) {
        if(!Array.isArray(array)){
            throw new TypeError(`${array} is not array...`);
        }
        this.#array = array;
    }

    enqueue (value) {
        return this.#array.push(value);
    }

    dequeue () {
        return this.#array.shift();
    }

    entries() {
        return [...this.#array];
    }
}

console.log("");
const qq = new Queue([1, 2, 3]);
console.log(qq.entries()); //[ 1, 2, 3 ]

qq.enqueue(4);
console.log(qq.entries()); //[ 1, 2, 3, 4 ]

qq.dequeue();
console.log(qq.entries()); //[ 2, 3, 4 ]