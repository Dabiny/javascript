// function sum() {
//     // 이터러블이면서 유사배열객체인 arguments를 배열로 반환
//     var args = Array.prototype.slice.call(arguments);
    
//     return args.reduce((function(pre, cur) {
//         return pre + cur;
//     }), 0);
    
// }

// console.log(sum(1, 2, 3)); // 6

// // 이터러블이 아닌 유사 배열 객체
// const arrayLike = {
//     0: 1,
//     1: 2,
//     2: 3,
//     length: 3
// };

// const arr = Array.prototype.slice.call(arrayLike);
// console.log(arr); // [1, 2, 3] Array



// function sum() {
//     return [...arguments].reduce((pre, cur) => pre + cur, 0);
// }

// console.log(sum(1, 2, 3));

const sum = (...args) => args.reduce((pre, cur) => pre + cur, 0);
console.log(sum(1, 2, 3)); // 6

const arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
};

console.log(Array.from(arrayLike)); // [1, 2, 3]