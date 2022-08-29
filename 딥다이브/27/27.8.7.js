const arr1 = [1, 2];
const arr2 = [3, 4];

// arr2의 배열을 해체하여 뒤에 새로운 요소를 추가
let result = arr1.concat(arr2);
console.log(result); //[ 1, 2, 3, 4 ]

result = arr1.concat(3);
console.log(result); // [ 1, 2, 3 ]

result = arr1.concat(arr2, 5);
console.log(result); // [ 1, 2, 3, 4, 5 ]


// unshift와 push 메서드는 인수로 전달받은 배열을 그대로 원본 배열의 요소로 추가한다.
const arr = [3, 4];
arr.unshift([1, 2]);
arr.push([5, 6]);
console.log(arr); // [ 1, 2 ], 3, 4, [ 5, 6 ] ]


let res = [1, 2].concat([3, 4]);
console.log(res); //[ 1, 2, 3, 4 ]

res = [...[1, 2], ...[3, 4]]; //스프레드문법 적용
console.log(res); //[ 1, 2, 3, 4 ]