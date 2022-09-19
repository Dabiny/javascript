const set = new Set([1, 2, 3]);

set.forEach((v, v2, set) => console.log(v, v2, set));
/*
1 1 Set(3) { 1, 2, 3 }
2 2 Set(3) { 1, 2, 3 }
3 3 Set(3) { 1, 2, 3 }
*/



// Set 객체는 Set.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다. 
console.log(Symbol.iterator in set); // true

// 이터러블인 Set객체는 for...of문으로 순회할 수 있다. 
for (let value of set) {
    console.log(value); // 1 2 3
}

// 이터러블의 Set 객체는 스프레드 문법의 대상이될 수 있다. 
console.log([...set]); 
// [ 1, 2, 3 ]

// 이터러블인 Set 객체는 배열 디스트럭처링 할당의 대상이 될 수 있다. 
const [a, ...rest] = set;
console.log(a, rest); // 1 [ 2, 3 ]