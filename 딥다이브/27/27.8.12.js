const arr = [1, 2, 3];

arr.fill(0);
console.log(arr); // [ 0, 0, 0 ]

// 인수로 전달받은 값 2, 인덱스 1부터 끝까지 요소로 채운다.
arr.fill(2, 1);
console.log(arr); // [ 0, 2, 2 ]

arr.fill(0, 1, 3); //인덱스 1부터 3이전까지 0으로 채운다. 
console.log(arr); // [ 0, 0, 0 ]


const arr2 = new Array(3);
console.log(arr2); //[ <3 empty items> ]

arr2.fill(1);
console.log(arr2); // [ 1, 1, 1 ]

const sequences = (length = 0) => Array.from({length}, (_, i) => i);
//const sequences = (length = 0) => Array.from(net Array(length), (_, i) => i);

console.log(sequences(3));