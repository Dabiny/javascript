const isIterable = v => v !== null && typeof v[Symbol.iterator] === 'function';

// 배열, 문자열, Map, Set등은 이터러블이다. 
console.log(isIterable([])); // true
console.log(isIterable('')); // true
console.log(isIterable(new Map())); // true
console.log(isIterable(new Set())); // true
console.log(isIterable({})); // false


const arr = [1, 2, 3];

// 배열은 Array.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다. 
console.log(Symbol.iterator in arr); // true

// 이터러블 배열은 for...of 문으로 순회 가능하다. 
for(const item of arr) {
    console.log(item); // 1 2 3
}

// 이터러블인 배열은 스프레드 문법의 대상으로 사용할 수 있따. 
console.log([...arr]); // [ 1, 2, 3 ]

// 이터러블인 배열은 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.
const [a, ...rest] = arr;

console.log(a, rest); // 1 [2, 3]


const obj = { a: 1, b: 2 };

// 일반 객체는 Symbo.iterator 메서드를 구현하거나 상속받지 않는다
// 따라서 일반 객체는 이터러블 프로토콜을 준수한 이터러블이 아니다. 
console.log(Symbol.iterator in obj);  // false

// // 이터러블이 아닌 일반 객체는 for...of문으로 순회 불가능
// for (const item of obj) {
//     console.log(item);  // TypeError: obj is not iterable
// }

// // 이터러블이 아닌 객체는 배열 디스트럭쳐링 할당의 대상으로 사용할 수 없음.
// const [a, b] = obj;

console.log({ ...obj }); // { a: 1, b: 2 }