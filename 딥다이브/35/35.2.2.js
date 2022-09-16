var arr1 = [1, 4];
var arr2 = [2, 3];

// 이렇게 넣으면 arr1에 arr2배열 자체가 추가된다. arr2를 해체해서 넣어야 한다. 
// arr1.splice(1, 0, arr2);
// console.log(arr1); // [ 1, [ 2, 3 ], 4 ]

arr1.splice(1, 0, ...arr2);
console.log(arr1); // [1, 2, 3, 4];

// ES5
// var origin = [1, 2];
// var copy = origin.slice();

// console.log(copy); //[1, 2]
// console.log(copy === origin) // false

// ES6
const origin = [1, 2];
const copy = [...origin];

console.log(copy); // [1, 2]
console.log(copy === origin); // false