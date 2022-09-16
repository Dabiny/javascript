var arr = [1, 2, 3];

var one = arr[0];
var two = arr[1];
var three = arr[2];

console.log(one, two, three); // 1 2 3

// ES6 배열 디스트럭처링 할당
// 변수 o t th를 선언하고 배열 arr을 디스트럭처링하려 할당.
// 이때 할당 기준은 배열의 인덱스다. 
const [o, t, th] = arr;

console.log(o, t, th); // 1 2 3

// const [x, y] = [1, 2];
// const [x, y]; // SyntaxError

let x, y;
[x, y] = [1, 2];
console.log(x, y); // 1 2

const [a, b, c = 3] = [1, 2];
console.log(a, b, c); // 1 2 3

// 기본값보다 할당된 값이 더 우선이다.
const [e, f = 10, g = 3] = [1, 2];
console.log(e, f, g); // 1 2 3