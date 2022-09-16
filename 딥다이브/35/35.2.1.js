// var arr = [1, 2].concat([3, 4]);
// console.log(arr); // [1, 2, 3, 4]

// 큰 배열안에 펼쳐서 넣는다는 느낌
const arr = [...[1, 2], ...[3, 4]];
console.log(arr); // [1, 2, 3, 4]

