const array = [1, 2, 3];

const iterator = array[Symbol.iterator]();

console.log('next' in iterator); // true

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

